import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { REST_INFO_URL } from "../utils/constants";
import { ITEM_IMG_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restData, setRestData] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const restInfo = await fetch(REST_INFO_URL + resId);
    const json = await restInfo.json();
    console.log(json);
    setRestData(json.data);
  };

  if (restData === null) {
    return <Shimmer />;
  }

  const { name } = restData?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <h2>menu items</h2>
      <ul>
        {itemCards.map((data) => {
          return (
            <li key={data.card.info.id}>
              <div className="menu-container">
                <div className="menu-container-info">
                  <h4>{data.card.info.name}</h4>
                  <h5>Rs{". " + data.card.info.price / 100}</h5>
                  <p>{data.card.info.description}</p>
                </div>
                <div className="menu-img-btn-container">
                  <img
                    src={ITEM_IMG_URL + data.card.info.imageId}
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
