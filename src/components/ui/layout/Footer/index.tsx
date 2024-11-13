import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="layout-footer">
      <div>
        <Link to="">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div className="layout-footer__socials">
        <h3>Follow Us On</h3>
        <a
          href="https://www.facebook.com/profile.php?id=61566077968171"
          target="__blank"
        >
          <FaFacebook /> Forklife Wellness
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61568168246502"
          target="__blank"
        >
          <FaFacebook /> Forklife Health
        </a>
      </div>
    </footer>
  );
};

export default Footer;
