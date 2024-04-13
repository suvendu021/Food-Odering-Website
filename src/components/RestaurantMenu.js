import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useResturantMenu from "../utils/useRestaurantMenu";
import RestaurantItemCategory from "./RestaurantItemCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restData = useResturantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (restData === null || !restData) {
    return <ShimmerMenu />;
  }
  // console.log(restData);
  const { name } =
    restData?.cards[0]?.card?.card?.info ||
    restData?.cards[2]?.card?.card?.info;

  const categories =
    restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards === undefined
      ? restData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
      : restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

  return (
    <div>
      <div className="mt-10">
        <h1 className="text-center font-bold text-3xl">{name}</h1>
        <h2 className="text-center font-bold text-xl">menu items</h2>
      </div>
      <div className="mt-10">
        {categories.map((data, index) => {
          return (
            <RestaurantItemCategory
              data={data?.card?.card}
              key={data?.card?.card?.title}
              // showData={index === showIndex ? true : false}
              // showIndex={() => setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
