import { useEffect, useState } from "react";
import { REST_INFO_URL } from "./constants";

const useResturantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch(REST_INFO_URL + resId);
    const json = await data.json();
    setResData(json.data);
  };

  return resData;
};

export default useResturantMenu;
