import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./Itemslist";
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item?.card?.info?.price
        ? (item?.card?.info?.price / 100) * item.quantity
        : (item?.card?.info?.defaultPrice / 100) * item.quantity;
    });
    setTotalPrice(total);
  });

  const handleClearItem = () => {
    //action dispatch
    dispatch(clearCart());
    toast.success("cart is clear");
  };
  const handleCheckout = () => {
    dispatch(clearCart());
    toast("Your order will delivered soon !!!", {
      duration: 2000,
      position: "top-center",

      // Styling
      style: {
        backgroundColor: "#4caf50", // Green background color
        color: "#fff", // White text color
        borderRadius: "8px", // Rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow
        padding: "16px", // Padding
        fontSize: "16px", // Font size
      },
      className: "",

      // Custom Icon
      icon: "🛑", // Stop sign emoji

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#fff", // White color for icon
        secondary: "#ff5722", // Orange color for icon
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className=" mt-12 text-4xl font-bold">MyCart</p>
      {cartItems.length !== 0 ? (
        <button
          className="p-2 m-2 bg-black text-white rounded-xl mt-5 "
          onClick={handleClearItem}
        >
          ClearCart
        </button>
      ) : null}
      {cartItems.length === 0 ? (
        <Link to={"/home"}>
          <p className="md:text-3xl mt-10">
            Your cart is Empty🥲, Plz add some Items !!!
          </p>
        </Link>
      ) : null}

      <div className="w-10/12  p-2 ">
        <ItemsList items={cartItems} />
        {cartItems.length !== 0 ? (
          <div className="mt-6">
            <p className="font-jost font-semibold text-xl">{`Total price = ${totalPrice} rupees`}</p>
            <Link to={"/home"}>
              <button
                className="p-2 mt-4 mb-20 bg-red-500 text-white"
                onClick={handleCheckout}
              >
                Check Out
              </button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Cart;
