import assets from "assets";
import {
  FaBeer,
  FaInbox,
  FaMap,
  FaMapMarked,
  FaPhoneAlt,
} from "react-icons/fa";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <section>
        <img src={assets.images.map} />
      </section>
      <section>
        <div>
          <h3>Contact US Here.</h3>
          <p>
            <FaInbox /> Email: forklifesolutions@gmail.com
          </p>
          <p>
            <FaPhoneAlt />
            08086563502
          </p>
          <p>
            <FaPhoneAlt />
            08147912128
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
