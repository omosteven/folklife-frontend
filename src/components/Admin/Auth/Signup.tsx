import { Button, Input } from "components/ui";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./GetStarted.scss";

import { useFormik } from "formik";
import * as Yup from "yup";

import API from "utils/api/API";
import toastMessage from "utils/toast";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password is too short")
    .required("Password is required"),
});

const Signup = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const signup = async (values: { email: string; password: string }) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await API.post("/auth/register", values);
      if (response.data) {
        toastMessage(
          "Account successfully created. We will redirect you to login."
        );
        setTimeout(() => {
          navigate("/team-login");
        }, 1500);
      }
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message || "Account Registration Failed."
      );
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "", firstName: "", lastName: "" },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      signup(values);
    },
  });

  return (
    <div className="get-started">
      <h1>Signup As An Admin!</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input
          placeholder="Enter Admin First Name"
          type="text"
          name="firstName"
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
          placeholder="Enter Admin Last Name"
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          hasError={Boolean(formik.errors.lastName && formik.touched.lastName)}
          errorMsg={formik.errors.lastName}
          required
        />
        <Input
          placeholder="Enter Admin Email"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          hasError={Boolean(formik.errors.email && formik.touched.email)}
          errorMsg={formik.errors.email}
          required
        />
        <Input
          placeholder="Enter Admin Password"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          hasError={Boolean(formik.errors.password && formik.touched.password)}
          errorMsg={formik.errors.password}
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
          text="Register"
          isLoading={loading}
          isLoadingText="Please wait..."
          type="submit"
        />
      </form>

      <div className="get-started__actions">
        <Button
          text="Or Login"
          className="start_new"
          onClick={() => navigate("/team-login")}
        />
      </div>
    </div>
  );
};

export default Signup;
