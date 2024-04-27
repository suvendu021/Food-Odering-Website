import { useDispatch, useSelector } from "react-redux";
import { ITEM_IMG_URL } from "../utils/constants";
import {
  addItems,
  decrementQuantity,
  incrementQuantity,
} from "../utils/cartSlice";
import toast from "react-hot-toast";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItems(item));
    toast.success("item added to cart");
  };

  const handleIncrement = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.card.info.id === item.card.info.id
    );

    if (existingItemIndex !== -1) {
      // If item already exists in the cart, dispatch the incrementQuantity action
      dispatch(incrementQuantity(existingItemIndex));
    }
    toast.success("item added to cart");
  };

  const handleDecrement = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.card.info.id === item.card.info.id
    );

    if (existingItemIndex !== -1) {
      // If item already exists in the cart, dispatch the decrementQuantity action
      dispatch(decrementQuantity(existingItemIndex));
    }
    toast.success("item removed to cart");
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
                {cartItems.some(
                  (cartItem) => cartItem.card.info.id === data.card.info.id
                ) ? (
                  // If item is in the cart, show inc-dec-counter
                  <div className="flex py-2 px-4 rounded-lg m-2 bg-black text-white space-x-1">
                    <div
                      className="cursor-pointer"
                      onClick={() => handleDecrement(data)}
                    >
                      -
                    </div>
                    <span>
                      {
                        cartItems.find(
                          (cartItem) =>
                            cartItem.card.info.id === data.card.info.id
                        )?.quantity
                      }
                    </span>
                    <div
                      className="cursor-pointer"
                      onClick={() => handleIncrement(data)}
                    >
                      +
                    </div>
                  </div>
                ) : (
                  // If item is not in the cart, show ADD button
                  <button
                    className="py-2 px-4 rounded-lg m-2 text-xs font-semibold bg-black text-white"
                    onClick={() => handleAddItem(data)}
                  >
                    ADD
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemsList;
