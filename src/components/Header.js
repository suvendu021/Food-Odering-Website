//HEADER
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [logBtn, setlogBtn] = useState("Log-in");
  // console.log("header rendered");

  useEffect(() => {
    // console.log("useeffect called");
  }, []);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="p-2.5 sticky top-0 bg-white flex justify-between items-center border border-black">
      <div>
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex space-x-8 items-center">
          <li>OnlineStatus : {onlineStatus === true ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="bg-slate-300 p-2"
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
