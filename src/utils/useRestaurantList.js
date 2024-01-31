import { useEffect, useState } from "react";
import { SWIGGY_API } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchRestList();
  }, []);

  const fetchRestList = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantList;
};
export default useRestaurantList;
