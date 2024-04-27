//body of app
import RestoCard, { PromotedRestaurant } from "./RestoCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import Footer from "./Footer";

const Body = () => {
  const restaurantList = useRestaurantList();
  const [filterSearchData, setFilterSearchData] = useState([]);
  const [filterBtn, setfilterBtn] = useState("Top-Rated Restaurants");
  const [searchData, setSearchData] = useState("");

  const TypeOfRest = PromotedRestaurant(RestoCard);

  useEffect(() => {
    setFilterSearchData(restaurantList);
  }, [restaurantList]);

  // console.log(filterSearchData);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false) {
    return <h1>No internet connection plz recheck your connection</h1>;
  }

  return restaurantList && restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="min-h-80">
        <div className="flex mt-12 justify-center font-jost">
          <input
            type="text"
            data-testid="searchinput"
            className="p-1 bg-slate-200 w-72 focus:outline-none shadow-md"
            value={searchData}
            onChange={(val) => setSearchData(val.target.value)}
          />
          <button
            className="p-1 bg-slate-100 hover:bg-slate-300 shadow-md"
            onClick={() => {
              // console.log(searchData);
              const filterSearchData = restaurantList.filter((data) =>
                data.info.name.toLowerCase().includes(searchData.toLowerCase())
              );
              setFilterSearchData(filterSearchData);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex justify-center mt-5 font-jost">
          <button
            className="p-2 bg-slate-100 hover:bg-slate-300 shadow-md"
            onClick={() => {
              const filterList = restaurantList.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilterSearchData(filterList);
              filterBtn === "Top-Rated Restaurants"
                ? setfilterBtn("Back to Home")
                : setfilterBtn("Top-Rated Restaurants");
              filterBtn === "Back to Home"
                ? setFilterSearchData(restaurantList)
                : setFilterSearchData(filterList);
            }}
          >
            {filterBtn}
          </button>
        </div>
        <div className="flex justify-center items-center my-5">
          <label>UserName : </label>
          <input
            type="text"
            placeholder="Enter Name"
            className=" border-2 border-black p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className=" m-2 p-2 flex flex-col justify-center items-center md:grid  md:grid-cols-3  lg:grid-cols-5 md:gap-1 xl:gap-3 md:justify-items-center">
          {filterSearchData.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <TypeOfRest resData={restaurant} />
              ) : (
                <RestoCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Body;
