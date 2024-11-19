import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
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
        <div className="nav-items" style={{ position: "relative" }}>
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
            <li style={{ marginRight: "10px" }}>
              <Link to="/cart">
                <i class="fa-solid fa-cart-shopping"></i>
                {cartItems.length >= 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "52px",
                      background: "gray",
                      color: "white",
                      borderRadius: "50%",
                      padding: "5px",
                      fontSize: "12px",
                    }}
                  >
                    {cartItems?.length}
                  </span>
                )}
              </Link>
            </li>
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
