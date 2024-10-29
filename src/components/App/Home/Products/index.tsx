import "./Products.scss";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <section className="products">
      <h3>Our Recent Listing</h3>
      <p>Go through our recent listing and place your order</p>
      <div className="products__listing">
        {Array.from({ length: 12 }).map((_, key) => (
          <ProductsCard key={key} />
        ))}
      </div>
    </section>
  );
};

export default Products;
