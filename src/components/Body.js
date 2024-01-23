//body of app
import RestoCard from "./RestoCard";
import { rest_lists } from "../utils/restoData";
import { useState } from "react";
const Body = () => {
  const [RestaurantList, setRestaurantList] = useState(rest_lists);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = RestaurantList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setRestaurantList(filterList);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {RestaurantList.map((restaurant) => (
          <RestoCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
