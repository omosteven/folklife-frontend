import assets from "assets";
import "./Content.scss";
import { Link } from "react-router-dom";

const testimonials = [
  {
    image: assets.images.testimonial1,
  },
  {
    image: assets.images.testimonial2,
  },
  {
    image: assets.images.testimonial3,
  },
  {
    image: assets.images.testimonial4,
  },
  {
    image: assets.images.testimonial1,
  },
  {
    image: assets.images.testimonial2,
  },
];

const Content = () => {
  const scrollProductsIntoView = () => {
    document.getElementById("products")?.scrollIntoView();
  };

  return (
    <section className="content">
      <div>
        <h1 className="center">
          Are you tired of constant joint pain dictating your daily activities?
        </h1>
        <div className="image">
          <img
            src={assets.images.page2}
            className="center"
            alt="Are you tired?"
          />
        </div>
        {/* <p>
          Discover <span>Ponagon</span> – a natural remedy designed to alleviate
          arthritis, rheumatism, spondylosis, sciatica, and gout, helping you
          move freely and live pain-free.
        </p> */}
      </div>
      <br />
      <br />
      <div>
        <h1 className="center">Discover Ponagon – a natural remedy</h1>
        <div className="image">
          <img
            src={assets.images.page3}
            className="center"
            alt="Are you tired?"
          />
        </div>
      </div>
      <br />

      <br />
      <div>
        <h1 className="center">
          Join over 3,000 satisfied users who have transformed their lives with
          Ponagon
        </h1>
        <div className="content__testimonials">
          {testimonials.map(({ image }, key) => (
            <div key={key}>
              <img src={image} alt="Testimonials" />
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />
      <div>
        <h1 className="center">
          Why Quick Fixes Fail...Surface Symptoms vs. Root Causes
        </h1>
        <div className="flex-images">
          <div className="imags">
            <img src={assets.images.page5} alt="Are you tired?" />
          </div>
          <div className="images">
            <img src={assets.images.page5_1} alt="Are you tired?" />
          </div>
        </div>
      </div>
      <br />

      <br />
      <div>
        <h1 className="center">Introducing Ponagon</h1>
        <p className="center">
          Ponagon combines ancient herbal wisdom with modern science.
        </p>
        <div className="image">
          <img
            src={assets.images.page6}
            className="center"
            alt="Are you tired?"
          />
        </div>
      </div>
      <br />
      <br />
      <div>
        <h1 className="center">Benefits of Ponagon</h1>
        <p className="center">
          Rapid Relief... Natural Ingredients... NAFDAC Approved...
        </p>
        <div className="pbenefit-images">
          <div className="image-left">
            <img src={assets.images.page7} alt="Are you tired?" />
          </div>
          <div className="images">
            <img src={assets.images.page7_1} alt="Are you tired?" />
            <img src={assets.images.page7_3} alt="Are you tired?" />
            <img src={assets.images.page7_2} alt="Are you tired?" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1 className="center">
          Don’t let arthritis control your life any longer...
        </h1>
        <div className="image">
          <img
            src={assets.images.page8}
            className="center"
            alt="Are you tired?"
          />
        </div>
      </div>
      <br />

      {/* <div>
        <h1>Why have traditional treatments not worked for you?</h1>
        <div>
          <h2>1. Quick Fixes Fail - Why?</h2>
          <p>
            Quick fixes like painkillers offer temporary relief but don’t
            address the wear and tear on your joints. Think of your cartilage as
            a cushion – arthritis erodes it over time, leaving bones grinding
            painfully. Ponagon supports joint repair and reduces inflammation to
            help you move comfortably again.
          </p>
          <Link to="/" onClick={scrollProductsIntoView}>
            Choose lasting comfort over short-term relief – choose Pentagon
            today!
          </Link>
        </div>
        <br />
        <div>
          <h2>2. Surface Symptoms vs. Root Causes</h2>
          <p>
            Most treatments only mask surface symptoms like pain and stiffness.
            The real root—chronic inflammation and joint erosion—remains
            untouched. Ponagon goes deeper, targeting these root causes to
            restore joint function and flexibility.
          </p>
          <Link to="/" onClick={scrollProductsIntoView}>
            Take control of your joint health with Ponagon – your natural
            solution to arthritis relief!
          </Link>
        </div>
      </div>

      <br />
      <br />
      <div>
        <h1>Introducing Ponagon</h1>
        <p>
          Ponagon combines ancient herbal wisdom with modern science to target
          inflammation and repair joints at the source.
        </p>
        <br />

        <h1>Benefits of Ponagon</h1>
        <p>
          <ol>
            <li>Rapid Relief: Feel improvement within weeks.</li>
            <li>
              Natural Ingredients: Safe and effective without harsh chemicals.
            </li>
            <li>NAFDAC Approved: Certified for quality and safety.</li>
          </ol>
        </p>
        <Link to="/" onClick={scrollProductsIntoView}>
          Don’t let arthritis control your life any longer. Order Ponagon today
          and start your journey to a pain-free, active lifestyle!
        </Link>
      </div> */}
      <br />
    </section>
  );
};

export default Content;
