import Login from "components/Admin/Auth/Login";
import Signup from "components/Admin/Auth/Signup";
import Dashboard from "components/Admin/Dashboard/Dashboard";
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
