import React from "react";

const Quizes = () => {
  return (
    <div className="flex justify-center h-[70vh] bg-black">
      <div className="mt-10">
        <h1 className="font-mammoth font-bold text-2xl text-center">
          Upcoming Quizes
        </h1>
        <div>{/* Render Quiz Card Component here */}</div>
      </div>
    </div>
  );
};

export default Quizes;
