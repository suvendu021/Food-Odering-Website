//HEADER
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [logBtn, setlogBtn] = useState("Log-in");
  console.log("header rendered");

  useEffect(() => {
    console.log("useeffect called");
  }, []);

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to={"/"} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="link">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="link">
              About Us
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="log-btn"
            onClick={() => {
              logBtn === "Log-in" ? setlogBtn("Log-out") : setlogBtn("Log-in");
            }}
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
