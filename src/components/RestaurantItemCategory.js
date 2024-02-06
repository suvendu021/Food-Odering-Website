import { useState } from "react";
import ItemsList from "./Itemslist";

const RestaurantItemCategory = ({ data }) => {
  const [showdata, setShowData] = useState(false);

  const showRestaurantMenu = () => {
    setShowData(!showdata);
  };

  const [showIconUp, setShowIconUp] = useState(false);

  return (
    <div
      className="w-8/12  bg-gray-200  mx-auto p-2 m-auto my-5 shadow-lg  cursor-pointer"
      onClick={() => {
        showRestaurantMenu();
        setShowIconUp(!showIconUp);
      }}
    >
      <div className="flex justify-between">
        <h2 className="font-bold text-lg">
          {data.title} ({data.itemCards.length}){" "}
        </h2>
        <span className="material-symbols-outlined">
          {showIconUp ? "expand_less" : "expand_more"}
        </span>
      </div>
      {showdata && <ItemsList items={data.itemCards} key={data.title} />}
    </div>
  );
};

export default RestaurantItemCategory;
