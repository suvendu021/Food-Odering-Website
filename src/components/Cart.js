import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./Itemslist";
import { clearCart } from "../utils/cartSlice";
import { UseDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearItem = () => {
    //action dispatch
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className=" mt-12 text-4xl font-bold ">MyCart</p>
      <button
        className="p-2 m-2 bg-black text-white rounded-xl mt-5 "
        onClick={handleClearItem}
      >
        ClearCart
      </button>
      {cartItems.length === 0 ? (
        <p>Your cart is Empty, Plz add some Items !!!</p>
      ) : null}

      <div className="w-10/12  p-2 ">
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
