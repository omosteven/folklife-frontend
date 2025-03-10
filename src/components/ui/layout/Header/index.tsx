import { useAppContext } from "AppContext";
import assets from "assets";
import Button from "components/ui/Button";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { user, token } = useAppContext();

  const showAdminTab = Boolean(user) && Boolean(token);

  return (
    <header className="layout-header">
      <div className="layout-header__left">
        <img src={assets.images.hero} alt="Forklife" />
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      {showAdminTab && (
        <div>
          <Button text="Admin" onClick={() => navigate("/team")} />
        </div>
      )}
    </header>
  );
};

export default Header;
