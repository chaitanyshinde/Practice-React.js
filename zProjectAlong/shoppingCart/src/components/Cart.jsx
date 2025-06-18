import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/CartSlice";

function Cart({ id, title, price, quantity, image }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };
  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value);
    if (qty >= 1) {
      dispatch(updateQuantity({ id, quantity: qty }));
    }
  };
  return (
    <div className="flex items-center border-b py-4 gap-4">
      <img src={image} alt={title} className="w-24 h-24 object-cover rounded" />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">Price: ₹{price}</p>
        <div className="flex items-center gap-2 mt-2">
          <label>Qty:</label>
          <button
            onClick={() =>
              quantity > 1 &&
              dispatch(updateQuantity({ id, quantity: quantity - 1 }))
            }
            className="bg-gray-300 px-2 rounded hover:bg-gray-400"
          >
            −
          </button>
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={handleQuantityChange}
            className="w-16 border px-2 py-1 text-center rounded"
          />
          <button
            onClick={() =>
              dispatch(updateQuantity({ id, quantity: quantity + 1 }))
            }
            className="bg-gray-300 px-2 rounded hover:bg-gray-400"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
}

export default Cart;
