import { useDispatch, useSelector } from "react-redux";
import CardItemCard from "./CardItemCard";
import { clearCart } from "../../utlis/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearTheCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col h-3/4">
      <div className="px-20 mt-10 ">
        {cartItem.map((item) => (
          <CardItemCard item={item} />
        ))}
      </div>
      <button
        onClick={() =>
          cartItem.length === 0 ? alert("Nothing to Clear") : clearTheCart()
        }
        className="px-8 py-3 mt-10 m-auto  text-2xl font-semibold border-2 border-gray-300 rounded-md shadow-md"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
