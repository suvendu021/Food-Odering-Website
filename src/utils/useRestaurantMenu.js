import { useEffect, useState } from "react";
import { REST_INFO_URL } from "./constants";

const useResturantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchResData();
  }, [resId]);

  const fetchResData = async () => {
    try {
      const data = await fetch(REST_INFO_URL + resId);
      const json = await data.json();
      setResData(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  return resData;
};

export default useResturantMenu;
