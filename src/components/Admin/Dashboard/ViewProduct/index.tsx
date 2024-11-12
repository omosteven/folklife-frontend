import { Button, DefaultModal, Input } from "components/ui";

import API from "utils/api/API";
import { useFormik } from "formik";
import * as Yup from "yup";
import toastMessage from "utils/toast";

import "./ViewProduct.scss";
import assets from "assets";
import { useState } from "react";

const ProductSchema = Yup.object().shape({
  productName: Yup.string().required("Product Name is required"),
  pricing: Yup.string().required("Pricing is required"),
  noOfUnits: Yup.number().required("No of Units is required"),
  location: Yup.string().required("Please enter the location"),
});

const ViewAdminProduct = ({
  toggleModal,
  selectedProduct,
  handleRefresh,
}: {
  toggleModal: () => void;
  selectedProduct: any;
  handleRefresh: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateProduct = async (values: {
    productName: string;
    noOfUnits: number;
    pricing: string;
    location: string;
  }) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await API.patch(
        `/products/${selectedProduct?._id}`,
        values
      );
      if (response.data) {
        toastMessage("Product Updated Successfully");
        handleRefresh?.();
        toggleModal?.();
      }
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message || "Product Update Failed."
      );
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (values: {
    productName: string;
    noOfUnits: number;
    pricing: string;
    location: string;
  }) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await API.delete(`/products/${selectedProduct?._id}`);
      if (response.data) {
        handleRefresh?.();
        toastMessage("Product Deleted Successfully");
        toggleModal?.();
      }
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message || "Product Deletion Failed."
      );
    } finally {
      setLoading(false);
    }
  };

  const { productName, noOfUnits, pricing, location, media }: any =
    selectedProduct || {};

  const formik = useFormik({
    initialValues: {
      productName,
      noOfUnits: Number(noOfUnits),
      pricing: String(pricing),
      location: String(location),
    },
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      updateProduct(values);
    },
  });

  return (
    <DefaultModal
      isOpen
      onClose={toggleModal}
      buttonText="Update Product"
      isButtonLoading={loading}
      onButtonClick={formik.handleSubmit}
    >
      <div className="view-product">
        <img src={media ? media?.url : assets.images.hero} alt="Product" />
        <h3>{productName}</h3>
        <p>
          N{pricing} | {location}
        </p>

        <section>
          <h4>Update Product Below</h4>
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
          <Button
            text="Delete Product"
            className="delete"
            onClick={deleteProduct}
          />
        </section>
      </div>
    </DefaultModal>
  );
};

export default ViewAdminProduct;
