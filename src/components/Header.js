import SiteLogo from "./SiteLogo";
import { useState } from "react";

const Header = () => {
  // let loginBtnName = "Login";
  const [loginBtnName, setLoginBtnName] = useState("Login");

  return (
    <div className="header">
      <SiteLogo />
      <ul className="navigation">
        <li className="nav-items">Home</li>
        <li className="nav-items">Contact Us</li>
        <li className="nav-items">About Us</li>
        <li className="nav-items">Cart</li>
        <button
          className="login-btn"
          onClick={(e) => {
            setLoginBtnName(loginBtnName == "Login" ? "Logout" : "Login");
          }}
        >
          {loginBtnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
