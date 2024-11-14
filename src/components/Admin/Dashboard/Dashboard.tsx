import { Button, ErrorView, Loader, Table } from "components/ui";
import "./Dashboard.scss";
import { useEffect, useState } from "react";
import AddProduct from "./AddProduct/AddProduct";
import ViewAdminProduct from "./ViewProduct";
import API from "utils/api/API";
import { dataQueryStatus } from "utils/dataQueryStatus";
import { getErrorMessage, getFormattedDate } from "utils/helper";

const { LOADING, ERROR, SUCCESS } = dataQueryStatus;

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState<"products" | "orders">(
    "products"
  );

  const [addModal, setAddModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const [status, setStatus] = useState(LOADING);
  const [errorMessage, setErrorMessage] = useState("");

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

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

  const getOrders = async () => {
    setStatus(LOADING);
    setErrorMessage("");
    try {
      const {
        data: { data },
      } = await API.get("/orders");
      setStatus(SUCCESS);
      setOrders(data);
    } catch (e) {
      setErrorMessage(getErrorMessage(e));
      setStatus(ERROR);
    }
  };

  useEffect(() => {
    currentTab === "products" ? getProducts() : getOrders();
  }, [currentTab]);

  console.log({ orders });
  const renderTableBasedOnTab = () => {
    switch (currentTab) {
      case "products":
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
      case "orders":
        return (
          <Table
            head={[
              "Product Name",
              "Full Name",
              "Phone Number",
              "Whatsapp",
              "Email",
              "No of Items",
              "Pricing",
              "Delivery Address",
              "Delivery Date",
              "Delivery State",
            ]}
            body={orders?.map(
              ({
                deliveryAddress,
                email,
                firstName,
                lastName,
                noOfItems,
                phoneNumber,
                productId,
                deliveryDate,
                whatsappNo,
                state,
              }: any) => {
                return {
                  productName: productId?.productName,
                  fullName: `${firstName} ${lastName}`,
                  phoneNumber: `${phoneNumber}`,
                  Whatsapp: `${whatsappNo}`,
                  email: `${email}`,
                  noOfItems: `${noOfItems} pieces`,
                  pricing: `${productId?.pricing}`,
                  deliveryAddress: `${deliveryAddress}`,
                  deliveryDate: `${getFormattedDate(deliveryDate)}`,
                  state: `${state || "N/A"}`,
                };
              }
            )}
          />
        );
      default:
        return "";
    }
  };

  const renderBasedOnStatus = () => {
    switch (status) {
      case LOADING:
        return <Loader />;
      case ERROR:
        return <ErrorView message={errorMessage} handleRetry={getProducts} />;
      case SUCCESS:
        return renderTableBasedOnTab();
      default:
        return "";
    }
  };

  return (
    <div className="dashboard">
      <section className="dashboard__heading">
        <h3>
          Manage Your {currentTab === "orders" ? "Orders" : "Products"} Here
        </h3>

        <Button text="Add New Product" onClick={toggleAddModal} />
      </section>

      <div
        style={{
          marginTop: "16px",
        }}
      >
        <Button
          text={currentTab === "orders" ? "Show Products" : "Show Orders"}
          onClick={() => {
            if (currentTab === "orders") {
              setCurrentTab("products");
            } else {
              setCurrentTab("orders");
            }
          }}
          invertStyle
        />
      </div>

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
