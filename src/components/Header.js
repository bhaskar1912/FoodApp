import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <>
      <div className="header">
        <div>
          <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
              style={{
                background: "gray",
                border: "none",
                cursor: "pointer",
                marginLeft: "10px",
                color: "white",
                borderRadius: "5px",
              }}
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
