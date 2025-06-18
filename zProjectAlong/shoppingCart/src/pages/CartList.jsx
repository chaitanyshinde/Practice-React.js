import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../components/Cart";
import { clearCart } from "../features/CartSlice";

function CartList() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <button
            onClick={handleClear}
            className="mb-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Clear Cart
          </button>

          {cartItems.map((item) => (
            <Cart key={item.id} {...item} />
          ))}
        </>
      )}
    </div>
  );
}

export default CartList;
