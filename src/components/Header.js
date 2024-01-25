//HEADER
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
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
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
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
