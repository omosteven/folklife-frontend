import { DatePicker, DefaultModal, Input, Textarea } from "components/ui";

import API from "utils/api/API";
import { useFormik } from "formik";
import * as Yup from "yup";
import toastMessage from "utils/toast";
import { startOfDay } from "date-fns";

import "./ViewProduct.scss";
import assets from "assets";
import { useState } from "react";
import OrderSuccess from "./OrderSuccess";
import Select from "components/ui/Select";

const states = [
  { label: "Abia", value: "Abia" },
  { label: "Adamawa", value: "Adamawa" },
  { label: "Akwa Ibom", value: "Akwa Ibom" },
  { label: "Anambra", value: "Anambra" },
  { label: "Bauchi", value: "Bauchi" },
  { label: "Bayelsa", value: "Bayelsa" },
  { label: "Benue", value: "Benue" },
  { label: "Borno", value: "Borno" },
  { label: "Cross River", value: "Cross River" },
  { label: "Delta", value: "Delta" },
  { label: "Ebonyi", value: "Ebonyi" },
  { label: "Edo", value: "Edo" },
  { label: "Ekiti", value: "Ekiti" },
  { label: "Enugu", value: "Enugu" },
  { label: "Gombe", value: "Gombe" },
  { label: "Imo", value: "Imo" },
  { label: "Jigawa", value: "Jigawa" },
  { label: "Kaduna", value: "Kaduna" },
  { label: "Kano", value: "Kano" },
  { label: "Katsina", value: "Katsina" },
  { label: "Kebbi", value: "Kebbi" },
  { label: "Kogi", value: "Kogi" },
  { label: "Kwara", value: "Kwara" },
  { label: "Lagos", value: "Lagos" },
  { label: "Nasarawa", value: "Nasarawa" },
  { label: "Niger", value: "Niger" },
  { label: "Ogun", value: "Ogun" },
  { label: "Ondo", value: "Ondo" },
  { label: "Osun", value: "Osun" },
  { label: "Oyo", value: "Oyo" },
  { label: "Plateau", value: "Plateau" },
  { label: "Rivers", value: "Rivers" },
  { label: "Sokoto", value: "Sokoto" },
  { label: "Taraba", value: "Taraba" },
  { label: "Yobe", value: "Yobe" },
  { label: "Zamfara", value: "Zamfara" },
  { label: "FCT Abuja", value: "FCT Abuja" },
];

const OrderSchema = Yup.object().shape({
  email: Yup.string().optional(),
  phoneNumber: Yup.string().required("Phone Number is required"),
  whatsappNo: Yup.string(),
  noOfItems: Yup.number()
    .min(1, "Please enter atleast one unit.")
    .required("No of Units is required"),
  deliveryAddress: Yup.string().required("Please enter the location"),
  productId: Yup.string().required("Please enter the productId"),
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  state: Yup.string().required("Please enter your delivery state"),
  deliveryDate: Yup.date()
    .required("Please choose delivery date")
    .min(startOfDay(new Date()), "Delivery date cannot be in the past"),
});

const ViewProduct = ({
  toggleModal,
  selectedProduct,
  handleRefresh,
  handleSubmitClick,
}: {
  toggleModal: () => void;
  selectedProduct: any;
  handleRefresh: () => void;
  handleSubmitClick: (product: any) => void;
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
    whatsappNo: string;
    deliveryDate: any;
    state: string;
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
      whatsappNo: "",
      deliveryDate: new Date().toISOString().split("T")[0],
      state: "",
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
        if (isSubmitted) {
          toggleModal();
        } else {
          formik.handleSubmit();
          handleSubmitClick(selectedProduct);
        }
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
              placeholder="Enter Whatsapp/Contact Phone"
              type="number"
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
              placeholder="Enter Whatsapp No"
              type="number"
              name="whatsappNo"
              label="Whatsapp No"
              value={formik.values.whatsappNo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              hasError={Boolean(
                formik.errors.whatsappNo && formik.touched.whatsappNo
              )}
              errorMsg={formik.errors.whatsappNo}
              required
            />
            <Input
              placeholder="How Many Pieces?"
              type="number"
              name="noOfItems"
              label="How Many Pieces?"
              value={formik.values.noOfItems?.toLocaleString?.()}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              hasError={Boolean(
                formik.errors.noOfItems && formik.touched.noOfItems
              )}
              errorMsg={formik.errors.noOfItems}
              required
            />
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "fit-content",
              }}
            >
              <DatePicker
                name="deliveryDate"
                label="Delivery Date"
                value={formik.values.deliveryDate}
                onChange={(value) =>
                  formik.setFieldValue("deliveryDate", value)
                }
                // onBlur={formik.handleBlur}
                hasError={Boolean(
                  formik.errors.deliveryDate && formik.touched.deliveryDate
                )}
                min={new Date().toISOString().split("T")[0]}
                errorMsg={formik.errors.deliveryDate}
                required
              />
            </div>
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
            <Select
              label="Pick State"
              options={states}
              name="state"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              hasError={Boolean(formik.errors.state && formik.touched.state)}
              errorMsg={formik.errors.state}
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
