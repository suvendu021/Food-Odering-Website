import { useParams } from "react-router-dom";
import { ITEM_IMG_URL } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";
import useResturantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restData = useResturantMenu(resId);

  if (restData === null) {
    return <ShimmerMenu />;
  }

  const { name } = restData?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(restData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  return (
    <div>
      <div className="mt-10">
        <h1 className="text-center font-bold text-3xl">{name}</h1>
        <h2 className="text-center font-bold text-xl">menu items</h2>
      </div>

      <ul>
        {itemCards.map((data) => {
          const { id, name, isVeg, price, description, imageId } =
            data?.card?.info;
          return (
            <li key={id}>
              <div className="flex border-b border-black my-5 md:mx-32 h-auto">
                <div className="p-2 m-2 w-3/5">
                  <h4 className="font-bold">{name}</h4>
                  <p className="text-sm">
                    {isVeg == 1 ? "(veg)" : "(Non Veg)"}
                  </p>
                  <h5 className="font-bold text-sm">Rs{". " + price / 100}</h5>
                  <p className="text-sm">{description}</p>
                </div>
                <div className="w-2/5 p-2 flex justify-center  relative ">
                  <img src={ITEM_IMG_URL + imageId} className=" w-28 h-24 " />
                  <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-200 py-1 px-2 shadow-md">
                    Add
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
