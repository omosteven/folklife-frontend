import Hero from "./Hero";
import Products from "./Products";

import "./Home.scss";
import PlaceOrder from "./PlaceOrder/PlaceOrder";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <PlaceOrder/>
      {/* <Products /> */}
    </div>
  );
};

export default Home;
