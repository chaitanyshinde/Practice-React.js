import React from "react";

const Navbar = () => {
  return (
    <div className="bg-amber-700 flex items-center px-10 py-5 gap-50 w-full">
      <h1 className=" text-3xl">Company</h1>
      <div className="flex items-center justify-center gap-10 absolute right-10">
        <h2 className="text-xl">Home</h2>
        <h2 className="text-xl">Services</h2>
        <h2 className="text-xl">About Us</h2>
        <h2 className="text-xl">Contact Us</h2>
      </div>
    </div>
  );
};

export default Navbar;
