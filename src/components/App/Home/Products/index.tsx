import { useEffect, useState } from "react";

import ProductsCard from "./ProductsCard";
import ViewProduct from "./ViewProduct";

import "./Products.scss";
import { dataQueryStatus } from "utils/dataQueryStatus";
import API from "utils/api/API";
import { getErrorMessage } from "utils/helper";
import { ErrorView, Loader } from "components/ui";

const { LOADING, ERROR, SUCCESS } = dataQueryStatus;

const Products = () => {
  const [status, setStatus] = useState(LOADING);
  const [errorMessage, setErrorMessage] = useState("");

  const [products, setProducts] = useState([]);
  const [selectedProduct, selectProduct] = useState<any>({});

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

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
          <>
            {products?.map((product, key) => (
              <ProductsCard
                key={key}
                toggleModal={() => {
                  selectProduct(product);
                  toggleModal();
                }}
                product={product}
              />
            ))}
          </>
        );
      default:
        return "";
    }
  };

  return (
    <>
      <section className="products" id="products">
        <h3>Our Recent Listing</h3>
        <p>Go through our recent listing and place your order</p>
        <div className="products__listing">{renderBasedOnStatus()}</div>
      </section>
      {showModal && (
        <ViewProduct
          toggleModal={toggleModal}
          selectedProduct={selectedProduct}
          handleRefresh={getProducts}
        />
      )}
    </>
  );
};

export default Products;
