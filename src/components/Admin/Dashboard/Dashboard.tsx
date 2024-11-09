import { Button, Table } from "components/ui";
import "./Dashboard.scss";
import { useState } from "react";
import AddProduct from "./AddProduct/AddProduct";
import ViewAdminProduct from "./ViewProduct";

const Dashboard = () => {
  const [addModal, setAddModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const toggleAddModal = () => setAddModal((prev) => !prev);
  const toggleViewModal = () => setViewModal((prev) => !prev);

  return (
    <div className="dashboard">
      <section className="dashboard__heading">
        <h3>Manage Your Products Here</h3>

        <Button text="Add New Product" onClick={toggleAddModal} />
      </section>

      <section className="dashboard__table">
        <Table
          head={["Product Name", "Pricing", "Units", "No of Orders", "Actions"]}
          body={[
            {
              name: "Flower Vase",
              pricing: "N50,000",
              units: 200,
              noOfOrders: 20,
              actions: <Button text="View" onClick={toggleViewModal} />,
            },
            {
              name: "Flower Vase",
              pricing: "N50,000",
              units: 200,
              noOfOrders: 20,
              actions: <Button text="View" />,
            },
          ]}
        />
      </section>

      {addModal && <AddProduct toggleModal={toggleAddModal} />}

      {viewModal && <ViewAdminProduct toggleModal={toggleViewModal} />}
    </div>
  );
};

export default Dashboard;
