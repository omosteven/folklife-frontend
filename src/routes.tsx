import Login from "components/Admin/Auth/Login";
import Signup from "components/Admin/Auth/Signup";
import Dashboard from "components/Admin/Dashboard/Dashboard";
import AboutUs from "components/App/AboutUs";
import ContactUs from "components/App/ContactUs";
import Home from "components/App/Home";

export const routes = [
  {
    route: "",
    component: <Home />,
    subRoutes: [],
    title: "",
    icon: "none",
  },
  {
    route: "/contact-us",
    component: <ContactUs />,
    subRoutes: [],
    title: "Contact Us",
    icon: "",
  },
  {
    route: "/about-us",
    component: <AboutUs />,
    subRoutes: [],
    title: "About Us",
    icon: "",
  },
  {
    route: "/team-login",
    component: <Login />,
    title: "Admin Login",
  },
  {
    route: "/team-signup",
    component: <Signup />,
    title: "Admin Signup",
  },
  {
    route: "/team",
    component: <Dashboard />,
    title: "Manage Team",
  },
];
