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
    <div className="m-0 p-1 sticky top-0 z-10 bg-white flex justify-between items-center shadow-lg">
      <div>
        <img className="w-24 p-1" src={LOGO_URL} />
      </div>
      <div>
        <ul className="md:flex md:space-x-8 md:items-center md:p-2 ">
          <li>OnlineStatus : {onlineStatus === true ? "🟢" : "🔴"}</li>
          <li className="hover:text-red-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>Cart</li>

          <button
            className="bg-slate-100 hover:bg-slate-300 shadow-md p-2"
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
