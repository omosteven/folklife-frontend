import { useState } from "react";

import ProductsCard from "./ProductsCard";
import ViewProduct from "./ViewProduct";

import "./Products.scss";

const Products = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <>
      <section className="products">
        <h3>Our Recent Listing</h3>
        <p>Go through our recent listing and place your order</p>
        <div className="products__listing">
          {Array.from({ length: 12 }).map((_, key) => (
            <ProductsCard key={key} toggleModal={toggleModal} />
          ))}
        </div>
      </section>
      {showModal && <ViewProduct toggleModal={toggleModal} />}
    </>
  );
};

export default Products;
