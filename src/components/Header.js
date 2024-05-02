//HEADER
import { LOGO_URL, SERVER } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import axios from "axios";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  // console.log("header rendered");

  // const nameOfUser = useContext(UserContext);
  // console.log(nameOfUser);

  useEffect(() => {
    // console.log("useeffect called");
  }, []);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const user = localStorage.getItem("userName");
  const navigate = useNavigate();
  const cookie = new Cookies();
  const accessToken = cookie.get("accessToken");
  const logOutApi = axios.create({
    withCredentials: true,
    baseURL: SERVER,
  });
  const handleLogOut = async () => {
    try {
      await logOutApi.post(
        `/api/v1/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      localStorage.removeItem("userName");
      cookie.remove("accessToken");
      navigate("/");
      toast.success("Successfully logOut");
    } catch (error) {}
  };

  return (
    <div className="m-0 p-1 sticky top-0 z-10 bg-white flex justify-between items-center shadow-lg font-semibold">
      <div>
        <img className="w-24 p-1" src={LOGO_URL} />
      </div>

      {user ? (
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
              <Link
                className="hover:text-red-300 focus:text-red-500"
                to={"/home"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-300 focus:text-red-500"
                to={"/contact"}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-300 focus:text-red-500"
                to={"/about"}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-300 focus:text-red-500"
                to={"/cart"}
              >
                Cart-({cartItems.length})
              </Link>
            </li>
            <li>
              <p>{`Welcome : ${localStorage.getItem("userName")}`}</p>
            </li>
            <li>
              <button
                className="px-4 py-2 text-red-500 bg-slate-300 rounded-lg"
                onClick={handleLogOut}
              >
                LogOut
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export default Header;
