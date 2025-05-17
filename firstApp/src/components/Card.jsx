import React from "react";

const Card = (prop) => {
  return (
    <div className=" bg-white text-black text-center w-50 p-5 m-2 inline-block rounded">
        <img className=" h-32 w-full p-2 m-2" src="" alt="" />
      The card item is {prop.item}. The market of {prop.item} would be {prop.market}
      <button className="bg-green-600 rounded p-1 mt-2 w-full">Add+</button>
    </div>
  );
};

export default Card;
