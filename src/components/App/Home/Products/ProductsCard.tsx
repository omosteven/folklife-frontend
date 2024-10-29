import assets from "assets";
import { Button } from "components/ui";

const ProductsCard = () => {
  return (
    <div className="products__card">
      <img src={assets.images.hero} alt="Product" />
      <h4>Flower Vase</h4>
      <p>N20,000 | Akobo Ibadan</p>
      <Button text="View Product" />
    </div>
  );
};

export default ProductsCard;
