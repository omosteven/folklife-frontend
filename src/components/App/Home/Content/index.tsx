import assets from "assets";
import "./Content.scss";
import { Link } from "react-router-dom";

const testimonials = [
  {
    image: assets.images.ponagon,
  },
  {
    image: assets.images.hoprazon,
  },
  {
    image: assets.images.hoprazon1,
  },
  {
    image: assets.images.heroWhite,
  },
  {
    image: assets.images.hoprazon,
  },
  {
    image: assets.images.ponagon,
  },
];

const Content = () => {
  const scrollProductsIntoView = () => {
    document.getElementById("products")?.scrollIntoView();
  };

  return (
    <section className="content">
      <div>
        <h1>
          Are you tired of constant joint pain dictating your daily activities?
          Are you struggling with stiffness that makes even simple tasks
          daunting?
        </h1>
        <p>
          Discover <span>Ponagon</span> – a natural remedy designed to alleviate
          arthritis, rheumatism, spondylosis, sciatica, and gout, helping you
          move freely and live pain-free.
        </p>
      </div>
      <br />
      <div>
        <h1>
          Join over 3,000 satisfied users who have transformed their lives with
          Ponagon.
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
      </div>
      <br />
    </section>
  );
};

export default Content;
