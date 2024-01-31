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

  // console.log(itemCards);

  return (
    <div className="res-menu">
      <div className="rest-name-menu-head">
        <h1>{name}</h1>
        <h2>menu items</h2>
      </div>

      <ul>
        {itemCards.map((data) => {
          const { id, name, isVeg, price, description, imageId } =
            data?.card?.info;
          return (
            <li key={id}>
              <div className="menu-container">
                <div className="menu-container-info">
                  <h4>{name}</h4>
                  <p>{isVeg == 1 ? "(veg)" : "(Non Veg)"}</p>
                  <h5>Rs{". " + price / 100}</h5>
                  <p>{description}</p>
                </div>
                <div className="menu-img-btn-container">
                  <img
                    src={ITEM_IMG_URL + imageId}
                    className="menu-item-photo"
                  />
                  <button className="item-add-btn">Add</button>
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
