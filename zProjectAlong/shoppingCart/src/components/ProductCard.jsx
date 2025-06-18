import React from "react";
import { addToCart } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ProductCard({ id, title, price, images }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image: images[0] }));
  };

  return (
    <div className="flex flex-col justify-between h-full border p-4 rounded shadow hover:shadow-md transition-all">
      <div>
        <Link to={`/product/${id}`}>
          <img
            src={images[0]}
            alt={title}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">{title}</h2>
          <p className="text-gray-700">₹{price}</p>
        </Link>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <Link to={`/product/${id}`}>
          <button className="w-full bg-green-600 text-white py-1.5 rounded hover:bg-green-700">
            Details
          </button>
        </Link>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
