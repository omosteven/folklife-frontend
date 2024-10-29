import Hero from "./Hero";
import Products from "./Products";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Products />
    </div>
  );
};

export default Home;
