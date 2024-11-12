import { DefaultModal, Input, Textarea } from "components/ui";

import API from "utils/api/API";
import { useFormik } from "formik";
import * as Yup from "yup";
import toastMessage from "utils/toast";

import "./ViewProduct.scss";
import assets from "assets";
import { useState } from "react";
import OrderSuccess from "./OrderSuccess";

const OrderSchema = Yup.object().shape({
  email: Yup.string().optional(),
  phoneNumber: Yup.string().required("Phone Number is required"),
  noOfItems: Yup.number().required("No of Units is required"),
  deliveryAddress: Yup.string().required("Please enter the location"),
  productId: Yup.string().required("Please enter the productId"),
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
});

const ViewProduct = ({
  toggleModal,
  selectedProduct,
  handleRefresh,
}: {
  toggleModal: () => void;
  selectedProduct: any;
  handleRefresh: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    productName,
    noOfUnits,
    pricing,
    location,
    orderCount,
    _id,
    media,
  }: any = selectedProduct || {};
  const noOfItemsLeft = noOfUnits - orderCount;

  const placeOrder = async (values: {
    email?: string;
    phoneNumber?: string;
    noOfItems: number;
    deliveryAddress: string;
    productId: string;
    firstName: string;
    lastName: string;
  }) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await API.post("/orders", values);
      if (response.data) {
        handleRefresh?.();
        setIsSubmitted(true);
        toastMessage("Order Processed Successfully");
        // toggleModal?.();
      }
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      noOfItems: 0,
      deliveryAddress: "",
      productId: _id,
      firstName: "",
      lastName: "",
    },
    validationSchema: OrderSchema,
    onSubmit: (values) => {
      placeOrder(values);
    },
  });
  return (
    <DefaultModal
      isOpen
      onClose={toggleModal}
      buttonText={isSubmitted ? "Close" : "Place Order"}
      isButtonLoading={loading}
      onButtonClick={() => {
        isSubmitted ? toggleModal() : formik.handleSubmit();
      }}
    >
      {isSubmitted ? (
        <OrderSuccess
          noOfItems={formik.values.noOfItems}
          productName={productName}
        />
      ) : (
        <div className="view-product">
          <img src={media ? media?.url : assets.images.hero} alt="Product" />
          <h3>{productName}</h3>
          <p>
            N{pricing} | {location} | {noOfItemsLeft} pieces left
          </p>

          <section>
            <h4>Please, Fill In Your Info To Order</h4>
            <br />
            <div
              style={{
                display: "flex",
                gap: "10px",
                width: "100%",
              }}
            >
              <Input
                placeholder="Enter First Name"
                type="text"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                hasError={Boolean(
                  formik.errors.firstName && formik.touched.firstName
                )}
                errorMsg={formik.errors.firstName}
                required
              />
              <Input
                placeholder="Enter Last Name"
                type="text"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                hasError={Boolean(
                  formik.errors.lastName && formik.touched.lastName
                )}
                errorMsg={formik.errors.lastName}
                required
              />
            </div>
            <Input
              placeholder="Enter Contact Email"
              type="email"
              name="email"
              label="Contact Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              hasError={Boolean(formik.errors.email && formik.touched.email)}
              errorMsg={formik.errors.email}
            />
            <Input
              placeholder="Enter Contact Phone"
              type="text"
              name="phoneNumber"
              label="Contact Phone"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              hasError={Boolean(
                formik.errors.phoneNumber && formik.touched.phoneNumber
              )}
              errorMsg={formik.errors.phoneNumber}
              required
            />
            <Input
              placeholder="How Many Pieces?"
              type="number"
              name="noOfItems"
              label="How Many Pieces?"
              value={formik.values.noOfItems}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              hasError={Boolean(
                formik.errors.noOfItems && formik.touched.noOfItems
              )}
              errorMsg={formik.errors.noOfItems}
              required
            />
            <Textarea
              placeholder="Full Delivery Address"
              name="deliveryAddress"
              label="Full Delivery Address"
              value={formik.values.deliveryAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              hasError={Boolean(
                formik.errors.deliveryAddress && formik.touched.deliveryAddress
              )}
              errorMsg={formik.errors.deliveryAddress}
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
          </section>
        </div>
      )}
    </DefaultModal>
  );
};

export default ViewProduct;
