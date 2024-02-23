import { useEffect, useState } from "react";
import { SWIGGY_API } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchRestList();
  }, []);

  const fetchRestList = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      console.log(json);
      setRestaurantList(
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  return restaurantList;
};
export default useRestaurantList;
