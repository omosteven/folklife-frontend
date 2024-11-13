import assets from "assets";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-us__heading">
        <h3>About Us</h3>
        <p>
          We are a health and wellness brand and some of our products are below.
        </p>
        <h4>Some of Our Products Are:</h4>
      </section>

      <section className="about-us__content">
        <h4>Ponagon Herbal Capsule For Arthritis And Rheumatism.</h4>
        <video src={assets.videos.ponagon} autoPlay />

        <p>
          Pains affect the overall wellbeing of humans. Pains like back pain,
          body pain, lumbar Arthritis Rheumatism.
          <br />
          Arthritis is the inflammation of one or more joints causing stiffness,
          pain, wear and tear that can worsen overtime with age.
          <br />
          Are you tired of excruciating pains you feel in your knee, lower back,
          thigh and joints in your body.
          <br />
          Here comes a supernatural herbal formula PONAGON.
          <br />
          It is specially formulated to cure joints and muscle pains. It
          permanently treats Arthritis and Rheumatism.
          <br />
          It helps support cartilate and joints flexibility.
          <br />
          It helps increase joint mobility and encourages overall health
          wellness.
          <br />
          It has a fast relief and no side effects.
          <br />
          It is NAFDAC approved.
        </p>
      </section>

      <section className="about-us__content">
        <h4>Hoprazon Herbal Capsule for Ulcer.</h4>
        <div className="about-us__content__images">
          <img src={assets.images.hoprazon} />
          <img src={assets.images.hoprazon1} />
        </div>
        <p>
          With our payment on delivery package, say Goodbye to Ulcers with
          Hoprazon!
          <br />
          Are you tired of discomfort and pain caused by stomach ulcers? Don't
          let it control your life any longer. Introducing Hoprazon -- the
          fast-acting, doctor-recommended solution for ulcer relief!
        </p>
        <p>
          <li>
            Effective Ulcer Healing:Hoprazon works from the inside out to heal
            your stomach lining and relieve painful symptions
          </li>
          <li>
            Fast & Long-lasting Relief: Feel the difference quickly with
            Hoprazon's unique formula designed for quick relief and long-term
            protection.
          </li>
          <li>
            Clinically Proven: Trusted by healthcare professionals for safe and
            effective ulcer treatment.
          </li>
          <li>
            Gentle on Your Stomach: Experience soothing relief without the harsh
            side effects.
          </li>
        </p>
        <p>
          Take control of your digestive health with Hoprazon! Feel better, live
          better.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
