import assets from "assets";
import { DefaultModal, FileInput, Input } from "components/ui";
import { useState } from "react";

const AddProduct = ({ toggleModal }: { toggleModal: () => void }) => {
  const [image, setImage] = useState<any>();
  return (
    <DefaultModal isOpen onClose={toggleModal} buttonText="Add Product">
      <div className="view-product">
        {image && <img src={assets.images.hero} alt="Product" />}

        <section>
          <h4
            style={{
              fontSize: "28px",
              marginBottom: "16px",
            }}
          >
            Fill In The Form Below to Add New Product
          </h4>

          <Input
            placeholder="Product Name"
            type="pricing"
            name="email"
            // onChange={setMeetingId}
            // hasError={Boolean(errorMessage)}
            required
          />
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
            placeholder="Location"
            type="number"
            name="email"
            // onChange={setMeetingId}
            // hasError={Boolean(errorMessage)}
            required
          />
          <div
            style={{
              marginTop: "16px",
              marginLeft: "auto",
              width: "fit-content",
              marginRight: "auto",
            }}
          >
            <FileInput labelText="Select Product Image" />
          </div>
        </section>
      </div>
    </DefaultModal>
  );
};
export default AddProduct;
