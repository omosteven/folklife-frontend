import Button from "components/ui/Button";

const Header = () => {
  return (
    <header className="layout-header">
      <div>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </div>
      <div>
        <Button text="My Cart" />
      </div>
    </header>
  );
};

export default Header;
