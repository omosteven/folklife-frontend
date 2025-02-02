import assets from "assets";
import "./Content.scss";
import { Link } from "react-router-dom";
import { Button } from "components/ui";

const testimonials = [
  {
    image: assets.images.review1,
  },
  {
    image: assets.images.review2,
  },
  {
    image: assets.images.review3,
  },
  {
    image: assets.images.review4,
  },
  {
    image: assets.images.review5,
  },
  {
    image: assets.images.review6,
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
        <p className="middle center">
          Arthritis is one of the most common chronic conditions worldwide,
          affecting millions of people of all ages. It is not just one disease
          but a broad term covering over 100 different types of joint disorders,
          all of which cause pain, swelling, stiffness, and decreased mobility.
          If left untreated, arthritis can worsen over time, leading to severe
          joint damage and disability.
        </p>
        {/* <div className="image">
          <img
            src={assets.images.page2}
            className="center"
            alt="Are you tired?"
          />
        </div> */}
        <div className="flex-images">
          <div className="imags">
            <img src={assets.images.page2} alt="Are you tired?" />
          </div>
          <div className="images">
            <img src={assets.images.page5_1} alt="Are you tired?" />
          </div>
        </div>
        {/* <p>
          Discover <span>Ponagon</span> – a natural remedy designed to alleviate
          arthritis, rheumatism, spondylosis, sciatica, and gout, helping you
          move freely and live pain-free.
        </p> */}
        <br />
        <h2 className="center">Types of Arthritis</h2>

        <p className="center">
          There are many types of arthritis, but the most common ones include:
        </p>

        <section>
          <p className="center">
            <b>1. Osteoarthritis (OA) – The “Wear and Tear” Arthritis</b>
          </p>
          <p className="center small">
            This is the most common type, caused by the gradual breakdown of
            cartilage—the protective cushioning between bones. As the cartilage
            wears down, bones begin to rub against each other, causing pain,
            stiffness, and swelling. Osteoarthritis is often seen in older
            adults, athletes, and individuals with joint injuries or obesity.
          </p>
          <p className="middle">Common Symptons Include:</p>
          <p className="middle">
            <ol>
              <li className="center middle">
                ❌ Joint pain that worsens with activity, ❌ Stiffness,
                especially in the morning
              </li>
              <li className="center middle">
                ❌ Reduced range of motion, ❌ A clicking or grinding sound in
                the joints
              </li>
            </ol>
          </p>
          <div className="image">
            <img
              src={assets.images.extra4}
              className="center"
              alt="Are you tired?"
            />
          </div>
        </section>

        <section>
          <p className="center">
            <b>2. Rheumatoid Arthritis (RA) – The Autoimmune Attack</b>
          </p>
          <p className="center small">
            Unlike osteoarthritis, which is caused by wear and tear, rheumatoid
            arthritis is an autoimmune disorder. The immune system mistakenly
            attacks the body’s own joint tissues, leading to chronic
            inflammation that can cause permanent joint damage. RA can affect
            multiple joints and even internal organs.
          </p>
          <p className="middle">Common Symptons Include:</p>
          <p className="middle">
            <ol>
              <li className="center middle">
                ❌ Swollen, tender joints, ❌ Fatigue and fever
              </li>
              <li className="center middle">
                ❌ Morning stiffness lasting over an hour, ❌ Deformities in the
                hands and fingers over time
              </li>
            </ol>
          </p>
          <div className="image">
            <img
              src={assets.images.extra1}
              className="center"
              alt="Are you tired?"
            />
          </div>
        </section>

        <section>
          <p className="center">
            <b>3. Gout – The “Rich Man’s Disease”</b>
          </p>
          <p className="center small">
            Gout is a painful type of arthritis caused by a buildup of uric acid
            crystals in the joints, especially in the toes. This often results
            from eating high-purine foods like red meat, alcohol, and seafood.
            Gout attacks can be sudden and extremely painful.
          </p>
          <p className="middle">Common Symptons Include:</p>
          <p className="middle">
            <ol>
              <li className="center middle">
                ❌ Intense joint pain (often in the big toe), ❌ Redness and
                swelling
              </li>
              <li className="center middle">
                ❌ Limited movement during flare-ups
              </li>
            </ol>
          </p>
          <div className="image">
            <img
              src={assets.images.extra5}
              className="center"
              alt="Are you tired?"
            />
          </div>
        </section>

        <section>
          <p className="center">
            <b>4. Spondylosis – Spinal Arthritis</b>
          </p>
          <p className="center small">
            Spondylosis refers to the degeneration of the spine, often affecting
            the neck (cervical spondylosis) or lower back (lumbar spondylosis).
            It is commonly associated with aging, poor posture, or prolonged
            sitting
          </p>
          <p className="middle">Common Symptons Include:</p>
          <p className="middle">
            <ol>
              <li className="center middle">
                ❌ Neck or lower back pain, ❌ Numbness or tingling in arms or
                legs
              </li>
              <li className="center middle">❌ Muscle weakness</li>
            </ol>
          </p>
          <div className="image">
            <img
              src={assets.images.extra2}
              className="center"
              alt="Are you tired?"
            />
          </div>
        </section>

        <section>
          <p className="center">
            <b>5. Sciatica – Nerve-Related Arthritis</b>
          </p>
          <p className="center small">
            Sciatica isn’t a type of arthritis but a condition caused by
            pressure on the sciatic nerve, often due to spinal arthritis,
            herniated discs, or bone spurs.
          </p>
          <p className="middle">Common Symptons Include:</p>
          <p className="middle">
            <ol>
              <li className="center middle">
                ❌ Shooting pain from the lower back to the legs, ❌ Numbness or
                tingling in the legs
              </li>
              <li className="center middle">
                ❌ Pain that worsens with sitting
              </li>
            </ol>
          </p>
          <div className="image">
            <img
              src={assets.images.extra3}
              className="center"
              alt="Are you tired?"
            />
          </div>
        </section>

        <br />
        <h2 className="center">What Causes Arthritis?</h2>
        <section>
          <p className="middle">
            <ol>
              <li className="center middle">
                1. Aging: Cartilage naturally wears down as we age.
              </li>
              <li className="center middle">
                2. Obesity: Excess weight puts stress on joints, especially
                knees and hips.
              </li>
              <li className="center middle">
                3. Genetics: Some forms of arthritis, like rheumatoid arthritis,
                run in families.
              </li>
              <li className="center middle">
                4. Joint Injuries: Previous injuries can increase the risk of
                arthritis in that joint.
              </li>
              <li className="center middle">
                5. Autoimmune Disorders: In conditions like rheumatoid
                arthritis, the body attacks its own joints.
              </li>
              <li className="center middle">
                6. Lifestyle Factors: Poor diet, lack of exercise, and smoking
                can increase inflammation and worsen arthritis.
              </li>
            </ol>
          </p>
        </section>

        <br />

        <h2 className="center">
          Why Is It Important to Treat Arthritis Early?
        </h2>
        <p className="middle center">
          Many people ignore early arthritis symptoms, thinking the pain will go
          away on its own. However, arthritis is a progressive condition—it
          worsens over time if left untreated.
        </p>
        <section>
          <p className="middle">Without treatment, arthritis can lead to:</p>
          <p className="middle">
            <ol>
              <li className="center middle">1. Permanent joint damage</li>
              <li className="center middle">
                2. Deformities in the hands, knees, or spine
              </li>
              <li className="center middle">
                3. Loss of mobility, making daily tasks difficult
              </li>
              <li className="center middle">
                4. Chronic pain and dependence on painkillers
              </li>
              <li className="center middle">
                5. Autoimmune Disorders: In conditions like rheumatoid
                arthritis, the body attacks its own joints.
              </li>
              <li className="center middle">
                6. Lifestyle Factors: Poor diet, lack of exercise, and smoking
                can increase inflammation and worsen arthritis.
              </li>
            </ol>
          </p>
        </section>

        <section>
          <p className="middle">With the right treatment, you can::</p>
          <p className="middle">
            <ol>
              <li className="center middle">✅ Reduce inflammation and pain</li>
              <li className="center middle">✅ Slow down joint degeneration</li>
              <li className="center middle">
                ✅ Improve mobility and flexibility
              </li>
              <li className="center middle">
                ✅ Restore an active and pain-free life
              </li>
            </ol>
          </p>
        </section>

        <p className="middle center">
          This is where Ponagon comes in! Unlike painkillers that offer
          temporary relief, Ponagon targets the root cause of arthritis, helping
          to repair damaged cartilage and reduce inflammation for lasting
          comfort. Don’t let arthritis take over your life! Take control of your
          joint health with Ponagon today.
        </p>
      </div>
      <div className="center">
        <Button text="Order Now" onClick={scrollProductsIntoView} />
      </div>
      <br />
      <br />
      <div>
        <h1 className="center">Discover Ponagon – Your Natural Solution.</h1>
        <p className="center">
          Ponagon is not just another pain reliever—it is a scientifically
          formulated natural remedy designed to:
        </p>
        <p className="middle">
          <ol>
            <li>
              ✅ Reduce Joint Inflammation – Targeting the root cause of
              arthritis and pain.
            </li>
            <li>
              ✅ Repair Damaged Cartilage – Restoring flexibility and mobility.
            </li>
            <li>
              ✅ Improve Blood Circulation – Ensuring nutrients reach your
              joints for healing.
            </li>
            <li>
              ✅ Strengthen Joints & Bones – Preventing further damage and
              discomfort.
            </li>
          </ol>
        </p>
        <div className="image">
          <img
            src={assets.images.page3}
            className="center"
            alt="Are you tired?"
          />
        </div>
        <p className="center">Suitable for:</p>
        <p className="middle">
          <li>Arthritis, Rheumatism, Spondylosis, Sciatica, Gout</li>
        </p>
        <p className="center">
          With Ponagon, you can experience real improvement in just 21 days!
        </p>
        <div className="center">
          <Button text="Order Now" onClick={scrollProductsIntoView} />
        </div>
      </div>
      <br />

      <br />
      <div>
        <h1 className="center">
          Join over 3,000 satisfied users who have transformed their lives with
          Ponagon
        </h1>
        <p className="center">
          Thousands of people have already experienced the life-changing
          benefits of Ponagon. See their stories.
        </p>
        <div className="content__testimonials">
          {testimonials.map(({ image }, key) => (
            <div key={key}>
              <img src={image} alt="Testimonials" />
            </div>
          ))}
        </div>
        <br />
        <div className="center">
          <Button text="Order Now" onClick={scrollProductsIntoView} />
        </div>
      </div>

      <br />
      <br />
      <div>
        <h1 className="center">
          Why Quick Fixes Fail...Surface Symptoms vs. Root Causes
        </h1>
        <p className="center">
          Most arthritis treatments only focus on surface symptoms like:
        </p>
        <p className="middle">
          <li>❌ Pain, ❌ Swelling, ❌ Stiffness</li>
          {/* <li>❌ Pain</li>
            <li>❌ Swelling</li>
            <li>❌ Stiffness</li> */}
        </p>
        <div className="flex-images">
          <div className="imags">
            <img src={assets.images.page5} alt="Are you tired?" />
          </div>
          <div className="images">
            <img src={assets.images.page5_1} alt="Are you tired?" />
          </div>
        </div>
        <p className="center">But the real cause of arthritis lies in:</p>
        <p className="middle">
          <ol>
            <li>✅ Chronic inflammation</li>
            <li>✅ Joint cartilage erosion</li>
            <li>✅ Nutrient deficiency in the joints</li>
          </ol>
        </p>
        <p className="center">
          Ponagon goes deeper, attacking inflammation and promoting cartilage
          repair for long-term relief. Take control of your joint health with
          Ponagon – your natural solution to arthritis relief!
        </p>
        <div className="center">
          <Button text="Order Now" onClick={scrollProductsIntoView} />
        </div>
      </div>
      <br />

      <br />
      <div>
        <h1 className="center">What Makes Ponagon Unique?</h1>
        <p className="center">
          Ponagon is a powerful blend of ancient herbal wisdom and modern
          science.{" "}
          {/* Ponagon combines ancient herbal wisdom with modern science. */}
        </p>
        <div className="image">
          <img
            src={assets.images.page6}
            className="center"
            alt="Are you tired?"
          />
        </div>
        <p className="center">
          Each ingredient is carefully selected to:
          {/* Ponagon combines ancient herbal wisdom with modern science. */}
        </p>
        <p className="middle">
          <ol>
            <li>✔️ Target inflammation at the source</li>
            <li>✔️ Support joint regeneration</li>
            <li>✔️ Enhance overall mobility</li>
          </ol>
        </p>
        <div className="center">
          <Button text="Order Now" onClick={scrollProductsIntoView} />
        </div>
      </div>
      <br />
      <br />
      <div>
        <h1 className="center">Benefits of Ponagon - Why Choose It?</h1>
        <p className="center">
          Rapid Relief... Natural Ingredients... NAFDAC Approved...
        </p>
        <div className="pbenefit-images">
          <div className="image-left">
            <img src={assets.images.page7} alt="Are you tired?" />
          </div>
          <p className="middle">
            <ol>
              <li>
                🌟 Fast-Acting Relief – Feel significant improvement within
                weeks.
              </li>
              <li>
                🌿 100% Natural Ingredients – No harsh chemicals or side
                effects.
              </li>
              <li>
                ✔ Clinically Tested & NAFDAC Approved – Certified for safety and
                effectiveness.
              </li>
              <li>💊 Non-Addictive & Safe for Long-Term Use</li>
            </ol>
          </p>
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
