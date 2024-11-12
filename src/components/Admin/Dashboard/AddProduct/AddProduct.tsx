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
  media: Yup.object().required("Please upload media file"),
});

const AddProduct = ({
  toggleModal,
  handleRefresh,
}: {
  toggleModal: () => void;
  handleRefresh: () => void;
}) => {
  const [image, setImage] = useState<{
    url: string;
    type: string;
    path: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const addProduct = async (values: {
    productName: string;
    noOfUnits: number;
    pricing: string;
    location: string;
    media: { url: string; type: string; path: string } | null;
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

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    setErrorMessage("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await API.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data) {
        const { url, type, path } = response?.data?.data;
        setImage({ url, type, path });
        formik.setFieldValue("media", { url, type, path });
        toastMessage("File uploaded successfully");
      }
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message || "File upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      productName: "",
      noOfUnits: 0,
      pricing: "",
      location: "",
      media: null,
    },
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      addProduct({ ...values, media: image });
    },
  });

  const handleSelectFile = (files: FileList) => {
    const fileToUpload = files?.[0];
    if (fileToUpload) {
      uploadFile(fileToUpload);
    }
  };
  return (
    <DefaultModal
      isOpen
      onClose={toggleModal}
      buttonText="Add Product"
      isButtonLoading={loading || isUploading}
      onButtonClick={() => {
        // if (image) {
        formik.handleSubmit();
        // }
      }}
    >
      <div className="view-product">
        {image && <img src={image?.url} alt="Product" />}

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
              color: "red",
            }}
          >
            <FileInput
              labelText="Select Product Image"
              onChange={handleSelectFile}
            />
            {formik.errors.media}
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
