import { Button, Input } from "components/ui";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "AppContext";
import "./GetStarted.scss";
import API from "utils/api/API";

import { useFormik } from "formik";
import * as Yup from "yup";
import toastMessage from "utils/toast";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password is too short")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { updateUser, updateToken } = useAppContext();

  const login = async (values: { email: string; password: string }) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await API.post("/auth/login", values);
      if (response.data) {
        const { token, ...rest } = response?.data?.data || {};
        updateUser(rest);
        updateToken(token);
        toastMessage(
          "Log In Successful. We will redirect you to dashboard shortly."
        );
        console.log("succes", response?.data?.data);
        setTimeout(() => {
          navigate("/team");
        }, 3000);
      }
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <div className="get-started">
      <h1>Login As An Admin</h1>
      <form onSubmit={formik.handleSubmit}>
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
          text="Login"
          isLoading={loading}
          isLoadingText="Please wait..."
          type="submit"
        />
      </form>

      <div className="get-started__actions">
        <Button
          text="Or Sign Up"
          className="start_new"
          onClick={() => navigate("/team-signup")}
        />
      </div>
    </div>
  );
};

export default Login;
