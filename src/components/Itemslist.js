import { useDispatch } from "react-redux";
import { ITEM_IMG_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((data) => {
        const { id, name, isVeg, price, description, imageId, defaultPrice } =
          data?.card?.info;
        return (
          <div key={id} className="text-sm">
            <div className="flex border-b border-black h-auto">
              <div className="p-1 m-1 w-3/5">
                <h4 className="font-bold">{name}</h4>
                <p>{isVeg == 1 ? "(veg🟢)" : "(Non Veg🔴)"}</p>
                <h5 className="font-bold ">
                  Rs. {price ? price / 100 : defaultPrice / 100}
                </h5>
                <p>{description}</p>
              </div>

              <div className="w-2/5 p-1 flex flex-col justify-center items-center ">
                {imageId ? (
                  <img
                    src={ITEM_IMG_URL + imageId}
                    className=" md:w-28 md:h-24 h-16 w-20 rounded-xl"
                  />
                ) : null}
                <div>
                  <button
                    className="p-1 bg-black text-white rounded-lg  md:mx-8 my-2"
                    onClick={() => handleAddItem(data)}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemsList;
