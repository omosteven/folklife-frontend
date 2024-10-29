import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Layout from "components/ui/layout";
import AppRoutes from "AppRoutes";

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
