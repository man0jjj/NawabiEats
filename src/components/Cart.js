import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList.js";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";




const Cart = () => {   

const cartItems = useSelector((store) => store.cart.items);

const dispatch = useDispatch();

const handleClearCart = () => {
    dispatch(clearCart());
};


    return (
        <div className="text-center m-6 p-6">
  <h1 className="text-2xl font-bold mb-4">Cart</h1>

  <div className="max-w-lg mx-auto space-y-4">

    {cartItems.length === 0 && (
      <div className="flex flex-col items-center justify-center w-full h-64 bg-gray-100 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-700">Your cart is empty!</h2>
        <p className="text-gray-500 mt-2">Looks like you haven't added anything yet. Start shopping now!</p>
      </div>
    )}

    <ItemList items={cartItems} />
    <button
      className="p-3 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition duration-200"
      onClick={handleClearCart}
    >
      🗑️ Clear Cart
    </button>
  </div>
</div>

    )
}


export default Cart;