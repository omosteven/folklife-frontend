import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Layout from "components/ui/layout";
import AppRoutes from "AppRoutes";

import ReactGA from "react-ga4";

ReactGA.initialize("G-BB12RWVRCM"); 
ReactGA.send("pageview");


function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
