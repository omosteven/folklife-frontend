import { Button, ErrorView, Loader, Table } from "components/ui";
import "./Dashboard.scss";
import { useEffect, useState } from "react";
import AddProduct from "./AddProduct/AddProduct";
import ViewAdminProduct from "./ViewProduct";
import API from "utils/api/API";
import { dataQueryStatus } from "utils/dataQueryStatus";
import { getErrorMessage } from "utils/helper";

const { LOADING, ERROR, SUCCESS } = dataQueryStatus;

const Dashboard = () => {
  const [addModal, setAddModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const [status, setStatus] = useState(LOADING);
  const [errorMessage, setErrorMessage] = useState("");

  const [products, setProducts] = useState([]);
  const [selectedProduct, selectProduct] = useState<any>({});

  const toggleAddModal = () => setAddModal((prev) => !prev);
  const toggleViewModal = () => setViewModal((prev) => !prev);

  const getProducts = async () => {
    setStatus(LOADING);
    setErrorMessage("");
    try {
      const {
        data: { data },
      } = await API.get("/products");
      setStatus(SUCCESS);
      setProducts(data);
    } catch (e) {
      setErrorMessage(getErrorMessage(e));
      setStatus(ERROR);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderBasedOnStatus = () => {
    switch (status) {
      case LOADING:
        return <Loader />;
      case ERROR:
        return <ErrorView message={errorMessage} handleRetry={getProducts} />;
      case SUCCESS:
        return (
          <Table
            head={[
              "Product Name",
              "Pricing",
              "Units",
              "No of Orders",
              "Actions",
            ]}
            body={products?.map(
              ({
                noOfUnits,
                orderCount,
                pricing,
                productName,
                ...rest
              }: any) => {
                return {
                  productName,
                  pricing: `N${pricing}`,
                  noOfUnits,
                  orderCount,
                  actions: (
                    <Button
                      text="View"
                      onClick={() => {
                        selectProduct({
                          noOfUnits,
                          orderCount,
                          pricing,
                          productName,
                          ...rest,
                        });
                        toggleViewModal();
                      }}
                    />
                  ),
                };
              }
            )}
          />
        );
      default:
        return "";
    }
  };

  return (
    <div className="dashboard">
      <section className="dashboard__heading">
        <h3>Manage Your Products Here</h3>

        <Button text="Add New Product" onClick={toggleAddModal} />
      </section>

      <section className="dashboard__table">{renderBasedOnStatus()}</section>

      {addModal && (
        <AddProduct toggleModal={toggleAddModal} handleRefresh={getProducts} />
      )}

      {viewModal && (
        <ViewAdminProduct
          toggleModal={toggleViewModal}
          handleRefresh={getProducts}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
};

export default Dashboard;
