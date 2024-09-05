import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <>
      <div className="header">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img className="logo" src={LOGO_URL} alt="logo" />
          <div>
            {onlineStatus ? (
              <i className="fas fa-wifi" style={{ color: "green" }} />
            ) : (
              <i
                className="fas fa-exclamation-triangle"
                style={{ color: "red" }}
                title="Your are Offline"
              />
            )}
          </div>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
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
