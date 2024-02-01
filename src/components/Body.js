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
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchData}
          onChange={(val) => setSearchData(val.target.value)}
        />
        <button
          className="search-btn"
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
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = restaurantList.filter(
              (res) => res.info.avgRating > 4.5
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
      <div className="resto-container">
        {filterSearchData.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
            className="rest-card-link"
          >
            <RestoCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
