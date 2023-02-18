import React from "react";

const Herosection = () => {
  return (
    <div className="h-screen flex justify-center ">
      <div className="mt-32">
        <h2 className="text-center text-xl font-bold uppercase">
          Introducing CryptoQuiz
        </h2>
        <h1 className="mt-5 text-center w-[35rem] text-4xl font-bold capitalize">
          Unlock the Future of Fair and <span>Secure</span> Quiz Hosting
        </h1>
        <div className="flex justify-center mt-10">
          <button className="px-4 py-2 bg-black border-[1px] border-gray-800 rounded-md mx-2">
            Explore
          </button>
          <button className="px-4 py-2 bg-black border-[1px] border-gray-800 rounded-md mx-2">
            Organize
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
