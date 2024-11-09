import { Button, DefaultModal, Input } from "components/ui";
import "./ViewProduct.scss";
import assets from "assets";

const ViewAdminProduct = ({ toggleModal }: { toggleModal: () => void }) => {
  return (
    <DefaultModal isOpen onClose={toggleModal} buttonText="Update Product">
      <div className="view-product">
        <img src={assets.images.hero} alt="Product" />
        <h3>Flower Vase</h3>
        <p>N20,000 | Akobo Ibadan</p>

        <section>
          <h4>Update Product Below</h4>
          <Input
            placeholder="Pricing"
            type="pricing"
            name="email"
            // onChange={setMeetingId}
            // hasError={Boolean(errorMessage)}
            required
          />
          <Input
            placeholder="No of Units"
            type="email"
            name="email"
            // onChange={setMeetingId}
            // hasError={Boolean(errorMessage)}
            required
          />
          <Input
            placeholder="Address"
            type="number"
            name="email"
            // onChange={setMeetingId}
            // hasError={Boolean(errorMessage)}
            required
          />
          <Button text="Delete Product" className="delete" />
        </section>
      </div>
    </DefaultModal>
  );
};

export default ViewAdminProduct;
