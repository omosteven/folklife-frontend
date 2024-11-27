import {
  Button,
  Checkbox,
  DatePicker,
  DefaultModal,
  Input,
  Textarea,
} from "components/ui";

import API from "utils/api/API";
import { useFormik } from "formik";
import * as Yup from "yup";
import toastMessage from "utils/toast";
import { startOfDay } from "date-fns";

// import "./ViewProduct.scss";
import assets from "assets";
import { useEffect, useState } from "react";
// import OrderSuccess from "./OrderSuccess";
import Select from "components/ui/Select";
import OrderSuccess from "../Products/ViewProduct/OrderSuccess";
import { getErrorMessage } from "utils/helper";
import "../Products/Products.scss";

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
  deliveryAddress: Yup.string().required("Please enter the location"),
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  state: Yup.string().required("Please enter your delivery state"),
  deliveryDate: Yup.date()
    .required("Please choose delivery date")
    .min(startOfDay(new Date()), "Delivery date cannot be in the past"),
  products: Yup.array()
    .min(1, "Please add at least one product")
    .of(
      Yup.object().shape({
        productId: Yup.string().required(),
        value: Yup.number().min(1, "Quantity must be at least 1").required(),
      })
    ),
});

const PlaceOrder = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [fetchingProducts, setFetchingProducts] = useState(false);
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
    deliveryAddress: string;
    firstName: string;
    lastName: string;
    whatsappNo: string;
    deliveryDate: any;
    state: string;
    products: any[];
  }) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await API.post("/multi-orders", values);
      if (response.data) {
        // handleRefresh?.();
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
      deliveryAddress: "",
      firstName: "",
      lastName: "",
      whatsappNo: "",
      deliveryDate: new Date().toISOString().split("T")[0],
      state: "",
      products: [],
    },
    validationSchema: OrderSchema,
    onSubmit: (values) => {
      placeOrder(values);
      console.log("submitted", { values });
    },
  });

  const getProducts = async () => {
    setFetchingProducts(true);
    setErrorMessage("");
    try {
      const {
        data: { data },
      } = await API.get("/products");
      setFetchingProducts(false);
      setProducts(data);
    } catch (e) {
      setErrorMessage(getErrorMessage(e));
      setFetchingProducts(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleProductChange = (productId: string, value: number) => {
    let updatedProducts: any[] = [...formik.values.products];

    if (value > 0) {
      const productIndex = updatedProducts.findIndex(
        (p) => p?.productId === productId
      );

      if (productIndex >= 0) {
        updatedProducts[productIndex].value = value;
      } else {
        updatedProducts?.push?.({ productId, value });
      }
    } else {
      updatedProducts = updatedProducts?.filter?.(
        (p) => p?.productId !== productId
      );
    }

    formik.setFieldValue("products", updatedProducts);
  };
  return (
    <>
      <section
        className="products"
        id="products"
        style={{
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        {/* <div className="products__listing">{renderBasedOnStatus()}</div> */}

        {isSubmitted ? (
          <OrderSuccess noOfItems={4} productName={productName} />
        ) : (
          <>
            <h3>Place Order For Our Product</h3>
            {/* <p>Go through our recent listing and place your order</p> */}
            <form className="view-product" onSubmit={formik.handleSubmit}>
              <section>
                <h4>Please, fill in your info to order</h4>
                <br />
                <div className="products__form-field">
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
                <br />
                <div className="products__form-field">
                  <Input
                    placeholder="Enter Contact Email"
                    type="email"
                    name="email"
                    label="Contact Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    hasError={Boolean(
                      formik.errors.email && formik.touched.email
                    )}
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
                </div>
                <br />
                <div className="products__form-field">
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

                <br />
                <Textarea
                  placeholder="Full Delivery Address"
                  name="deliveryAddress"
                  label="Full Delivery Address"
                  value={formik.values.deliveryAddress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  hasError={Boolean(
                    formik.errors.deliveryAddress &&
                      formik.touched.deliveryAddress
                  )}
                  errorMsg={formik.errors.deliveryAddress}
                  required
                />
                <br />

                <div className="products__form-field">
                  <Select
                    label="Delivery State"
                    options={states}
                    name="state"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    hasError={Boolean(
                      formik.errors.state && formik.touched.state
                    )}
                    errorMsg={formik.errors.state}
                    required
                  />
                </div>

                <section className="products_order_items">
                  <h4>
                    Select Items You Want to Order for from the list below:
                  </h4>
                  {fetchingProducts ? (
                    <p>
                      We are fetching available products. Please wait a
                      moment....
                    </p>
                  ) : (
                    ""
                  )}
                  {products?.map?.(
                    ({ productName, noOfUnits, pricing, _id }: any, key) => (
                      <div key={key} className="products_order_items__each">
                        <Checkbox
                          label={`${noOfUnits} unit(s) of ${productName} - ₦${Number(
                            pricing
                          )?.toLocaleString?.()}`}
                          onChange={(checked: any) =>
                            handleProductChange(_id, checked ? 1 : 0)
                          }
                        />
                        {/* {"ss".toLocaleLowerCase?.()} */}
                        {/* <Input
                        placeholder="How many"
                        type="number"
                        name={`product-${_id}`}
                        label={`How Many Pieces of ${productName}?`}
                        // value={
                        //   (formik.values.products.find(
                        //     (p: any) => p.productId === id
                        //   )?.value as any) || ""
                        // }
                        onChange={(e: any) =>
                          handleProductChange(
                            _id,
                            parseInt(e?.target.value, 10)
                          )
                        }
                        onBlur={formik.handleBlur}
                        hasError={Boolean(
                          formik.errors.products &&
                            formik.touched.products &&
                            !formik.values.products.some(
                              (p: any) => p.value > 0
                            )
                        )}
                        errorMsg={
                          formik.errors.products &&
                          !formik.values.products.some((p: any) => p.value > 0)
                            ? "Please add at least one product"
                            : ""
                        }
                      /> */}
                      </div>
                    )
                  )}
                </section>
                {formik.errors?.products ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    {formik.errors?.products}
                  </p>
                ) : (
                  ""
                )}

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
              <br />
              <div
                style={{
                  marginTop: "16px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "fit-content",
                }}
              >
                <Button
                  text="Submit Order"
                  type="submit"
                  isLoading={loading || fetchingProducts}
                />
              </div>
            </form>
          </>
        )}
      </section>
    </>
  );
};

export default PlaceOrder;
