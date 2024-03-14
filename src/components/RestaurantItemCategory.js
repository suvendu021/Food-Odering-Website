import { useState } from "react";
import ItemsList from "./Itemslist";

const RestaurantItemCategory = ({ data }) => {
  const [showData, setShowData] = useState(false);

  const showRestaurantMenu = () => {
    setShowData(!showData);
  };

  // when this component controlled by restaurant menu
  // const showRestaurantMenu = () => {
  //   showIndex();
  // };

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
        <h2 className="font-bold text-base">
          {data.title} ({data.itemCards.length}){" "}
        </h2>
        <span className="material-symbols-outlined">
          {showIconUp ? "expand_less" : "expand_more"}
        </span>
      </div>
      {showData && <ItemsList items={data.itemCards} key={data.title} />}
    </div>
  );
};

export default RestaurantItemCategory;
