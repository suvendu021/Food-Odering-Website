import { useEffect, useState } from "react";
import { SERVER_RESTAURANT_API, SWIGGY_API } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchRestList();
  }, []);

  const fetchRestList = async () => {
    try {
      const response = await fetch(SERVER_RESTAURANT_API);
      const json = await response.json();
      // console.log(json);
      setRestaurantList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      if (
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants === undefined
      ) {
        fetchRestoForMobile(json); // Pass JSON data to fetchRestoForMobile
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRestoForMobile = async (jsonData) => {
    // Accept JSON data as an argument
    // console.log(jsonData);
    setRestaurantList(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return restaurantList;
};

export default useRestaurantList;
