import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-12 xl:px-32 h-16 bg-black">
      <Logo className="h-5 w-32" />

      <ul className="flex items-center font-semibold">
        <li className="mx-3">Register Quiz</li>
        <li className="mx-3">Profile</li>
        <li className="mx-3">Login</li>
        <button className="bg-gradient-to-r text-black from-[#05C9F9] to-[#E5F61B]  px-4 py-1.5 rounded-md">Signup</button>
      </ul>
    </div>
  );
};

export default Navbar;
