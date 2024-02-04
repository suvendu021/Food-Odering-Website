//body of app
import RestoCard from "./RestoCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const restaurantList = useRestaurantList();
  const [filterSearchData, setFilterSearchData] = useState([]);
  const [filterBtn, setfilterBtn] = useState("Top-Rated Restaurants");
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    setFilterSearchData(restaurantList);
  }, [restaurantList]);

  // console.log("page rendered");

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>No internet connection plz recheck your connection</h1>;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex mt-12 justify-center">
        <input
          type="text"
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
      <div className="flex justify-center mt-5">
        <button
          className="p-2 bg-slate-100 hover:bg-slate-300 shadow-md"
          onClick={() => {
            const filterList = restaurantList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilterSearchData(filterList);
            filterBtn === "Top-Rated Restaurants"
              ? setfilterBtn("Back to Home")
              : setfilterBtn("Top-Rated Restaurants");
          }}
        >
          {filterBtn}
        </button>
      </div>
      <div className=" grid grid-cols-5 gap-3  m-2 p-2">
        {filterSearchData.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestoCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
