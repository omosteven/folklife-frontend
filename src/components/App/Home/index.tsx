import Hero from "./Hero";
import Products from "./Products";

import "./Home.scss";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import Content from "./Content";
import PostFormContent from "./PostFormContent";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Content />
      <PlaceOrder />
      <PostFormContent />
      {/* <Products /> */}
    </div>
  );
};

export default Home;
