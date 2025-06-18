import React from "react";
import { addToCart } from "../features/CartSlice";
import { useDispatch } from "react-redux";

function DetailsCard({ id, title, description, price, images }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image: images?.[0] || "" }));
  };

  return (
    <div className="p-6 border rounded shadow max-w-md mx-auto">
      <img
        src={images?.[0]}
        alt={title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <p className="text-lg text-blue-600 font-semibold mt-3">₹{price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default DetailsCard;
