import assets from "assets";

import { DefaultModal, FileInput, Input } from "components/ui";
import { useState } from "react";

import API from "utils/api/API";
import { useFormik } from "formik";
import * as Yup from "yup";
import toastMessage from "utils/toast";

const ProductSchema = Yup.object().shape({
  productName: Yup.string().required("Product Name is required"),
  pricing: Yup.string().required("Pricing is required"),
  noOfUnits: Yup.number().required("No of Units is required"),
  location: Yup.string().required("Please enter the location"),
});

const AddProduct = ({
  toggleModal,
  handleRefresh,
}: {
  toggleModal: () => void;
  handleRefresh: () => void;
}) => {
  const [image, setImage] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const addProduct = async (values: {
    productName: string;
    noOfUnits: number;
    pricing: string;
    location: string;
  }) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await API.post("/products", values);
      if (response.data) {
        handleRefresh?.();
        toastMessage("New Product Added Successfully");
        toggleModal?.();
      }
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: { productName: "", noOfUnits: 0, pricing: "", location: "" },
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      addProduct(values);
    },
  });

  return (
    <DefaultModal
      isOpen
      onClose={toggleModal}
      buttonText="Add Product"
      isButtonLoading={loading}
      onButtonClick={formik.handleSubmit}
    >
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
            type="text"
            name="productName"
            label="Product Name"
            value={formik.values.productName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={Boolean(
              formik.errors.productName && formik.touched.productName
            )}
            errorMsg={formik.errors.productName}
            required
          />
          <br />
          <Input
            placeholder="Pricing"
            label="Pricing"
            type="text"
            name="pricing"
            value={formik.values.pricing}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={Boolean(formik.errors.pricing && formik.touched.pricing)}
            errorMsg={formik.errors.pricing}
            required
          />
          <br />

          <Input
            placeholder="No of Units"
            type="number"
            label="No of Units"
            name="noOfUnits"
            value={formik.values.noOfUnits}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={Boolean(
              formik.errors.noOfUnits && formik.touched.noOfUnits
            )}
            errorMsg={formik.errors.noOfUnits}
            required
          />
          <br />

          <Input
            placeholder="Location"
            type="text"
            label="Location"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={Boolean(
              formik.errors.location && formik.touched.location
            )}
            errorMsg={formik.errors.location}
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

          {errorMessage && (
            <p
              className="text-danger"
              style={{
                fontSize: "14px",
              }}
            >
              {errorMessage}
            </p>
          )}
        </section>
      </div>
    </DefaultModal>
  );
};
export default AddProduct;
