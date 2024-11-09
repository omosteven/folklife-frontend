import { DefaultModal, Input, Textarea } from "components/ui";
import "./ViewProduct.scss";
import assets from "assets";

const ViewProduct = ({ toggleModal }: { toggleModal: () => void }) => {
  return (
    <DefaultModal isOpen onClose={toggleModal} buttonText="Place Order">
      <div className="view-product">
        <img src={assets.images.hero} alt="Product" />
        <h3>Flower Vase</h3>
        <p>N20,000 | Akobo Ibadan</p>

        <section>
          <h4>Please, Fill In Your Info To Order</h4>
          <Input
            placeholder="Enter Contact Email"
            type="email"
            name="email"
            // onChange={setMeetingId}
            // hasError={Boolean(errorMessage)}
            required
          />
          <Input
            placeholder="Enter Contact Phone"
            type="email"
            name="email"
            // onChange={setMeetingId}
            // hasError={Boolean(errorMessage)}
            required
          />
          <Input
            placeholder="How Many Pieces?"
            type="number"
            name="email"
            // onChange={setMeetingId}
            // hasError={Boolean(errorMessage)}
            required
          />
          <Textarea placeholder="Full Delivery Address" />
        </section>
      </div>
    </DefaultModal>
  );
};

export default ViewProduct;
