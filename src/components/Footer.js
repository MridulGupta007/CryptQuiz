import React from "react";
import { ReactComponent as Logo } from "../Assets/logo.svg";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-12 xl:px-32 h-16 bg-black border-2 border-gray-800">
      <Logo className="h-5 w-32" />
      <p className="text-gray-500">Built by amazing peeps. All rights reserved.</p>
    </div>
  );
};

export default Footer;
