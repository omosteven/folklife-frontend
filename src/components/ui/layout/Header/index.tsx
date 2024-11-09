import Button from "components/ui/Button";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="layout-header">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div>
        <Button text="Admin" onClick={() => navigate("/team")} />
      </div>
    </header>
  );
};

export default Header;
