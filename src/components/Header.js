//HEADER
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [logBtn, setlogBtn] = useState("Log-in");
  const [showMenu, setShowMenu] = useState(false);
  // console.log("header rendered");

  const nameOfUser = useContext(UserContext);
  console.log(nameOfUser);

  useEffect(() => {
    // console.log("useeffect called");
  }, []);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="m-0 p-1 sticky top-0 z-10 bg-white flex justify-between items-center shadow-lg font-semibold">
      <div>
        <img className="w-24 p-1" src={LOGO_URL} />
      </div>
      <div>
        <div className="md:hidden m-2 p-2 flex justify-end">
          <button
            className="material-symbols-outlined"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? "close" : "menu"}
          </button>
        </div>

        <ul
          className={`md:flex md:space-x-8 md:items-center md:p-2 md:m-2 ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <li>OnlineStatus : {onlineStatus === true ? "🟢" : "🔴"}</li>
          <li>
            <Link className="hover:text-red-500 focus:text-red-500" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500 focus:text-red-500"
              to={"/contact"}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500 focus:text-red-500"
              to={"/about"}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500 focus:text-red-500"
              to={"/cart"}
            >
              Cart-({cartItems.length})
            </Link>
          </li>

          <button
            className={`bg-slate-100 hover:bg-slate-300 shadow-md p-2 ${
              logBtn === "Log-in" ? "text-green-500" : "text-red-500"
            }`}
            onClick={() => {
              logBtn === "Log-in" ? setlogBtn("Log-out") : setlogBtn("Log-in");
            }}
          >
            {logBtn}
          </button>

          <li>{nameOfUser.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
