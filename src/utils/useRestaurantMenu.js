import { useEffect, useState } from "react";
import {
  REST_INFO_URL,
  SERVER_RESTAURANT_API,
  SERVER_RESTAURANT_MENU,
} from "./constants";

const useResturantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchResData();
  }, [resId]);

  const fetchResData = async () => {
    try {
      const data = await fetch(SERVER_RESTAURANT_MENU + resId);
      const json = await data.json();
      setResData(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  return resData;
};

export default useResturantMenu;
