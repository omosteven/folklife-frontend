import { Button } from "components/ui";
import "./Hero.scss";
import assets from "assets";

const Hero = () => {
  const scrollProductsIntoView = () => {
    document.getElementById("products")?.scrollIntoView();
  };
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>
          Reclaim Your Life from Arthritis Pain with Ponagon – Experience Relief
          in Just 21 Days!
        </h1>
        {/* <h1>Experience The Best With ForkLife Solutions.</h1> */}
        <Button text="Check Our Products" onClick={scrollProductsIntoView} />
      </div>
      <div className="hero__image">
        <img src={assets.images.page1} alt="Hero" />
        {/* <video src={assets.videos.ponagon} autoPlay controls /> */}
      </div>
    </section>
  );
};

export default Hero;
