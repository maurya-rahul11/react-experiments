import SiteLogo from "./SiteLogo";

const Header = () => {
  return (
    <div className="header">
      <SiteLogo />
      <ul className="navigation">
        <li className="nav-items">Home</li>
        <li className="nav-items">Contact Us</li>
        <li className="nav-items">About Us</li>
        <li className="nav-items">Cart</li>
      </ul>
    </div>
  );
};

export default Header;