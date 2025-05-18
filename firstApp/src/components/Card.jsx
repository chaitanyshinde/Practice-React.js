import React from "react";

const Card = (prop) => {
  return (
    <div className=" bg-gray-800 text-white text-center w-50 p-5 m-2 inline-block rounded">
      <img
        className=" h-32 w-full p-2 m-2"
        src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
        alt=""
      />
      <div>{prop.name}</div>
      <div>{prop.age}</div>
      <div>{prop.income}</div>
      <button className="bg-green-600 rounded p-1 mt-2 w-full">Details</button>
    </div>
  );
};

export default Card;
