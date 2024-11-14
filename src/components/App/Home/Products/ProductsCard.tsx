import assets from "assets";
import { Button } from "components/ui";

const ProductsCard = ({
  toggleModal,
  product,
}: {
  toggleModal: () => void;
  product: any;
}) => {
  const { productName, noOfUnits, pricing, location, orderCount, media }: any =
    product || {};

  const noOfItemsLeft = noOfUnits - orderCount;
  return (
    <div className="products__card">
      <img src={media ? media?.url : assets.images.hero} alt="Product" />
      <h4>{productName}</h4>
      <p>
        N{pricing} | {location}
      </p>
      <p>{noOfItemsLeft} pieces left</p>
      <Button text="Place Order" onClick={toggleModal} />
    </div>
  );
};

export default ProductsCard;
