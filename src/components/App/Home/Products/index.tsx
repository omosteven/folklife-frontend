import { useEffect, useState } from "react";

import ProductsCard from "./ProductsCard";
import ViewProduct from "./ViewProduct";

import "./Products.scss";
import { dataQueryStatus } from "utils/dataQueryStatus";
import API from "utils/api/API";
import { getErrorMessage, getFormattedDate } from "utils/helper";
import { ErrorView, Loader } from "components/ui";
import ReactGA from "react-ga4";
import ReactPixel from "react-facebook-pixel";
import { trackEvent } from "utils/facebookPixel";

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

  const handleClick = (product: any) => {
    trackEvent("Purchase", {
      product_id: product?.id,
      product_name: product?.productName,
      value: product?.pricing,
      currency: "N",
      time_purchase: getFormattedDate(),
    });

    ReactPixel.track("Purchase", {
      product_id: product?.id,
      product_name: product?.productName,
      value: product?.pricing,
      currency: "N",
      time_purchase: getFormattedDate(),
    });

    ReactGA?.event?.("product_view", {
      category: "User",
      action: `Clicked on Order View Button - ${product?.productName}-${product?.id}`,
      label: `Order Modal`,
    });

    // Additional logic for the button
  };

  const handleSubmitClick = (product: any) => {
    ReactGA?.event?.({
      category: "User",
      action: `Clicked on Order Submit Button - ${product?.productName}-${product?.id}`,
      label: `Order Modal`,
    });
    // Additional logic for the button
  };

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
                  handleClick(product);
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
          handleSubmitClick={handleSubmitClick}
        />
      )}
    </>
  );
};

export default Products;
