import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
const Team = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-black pb-20">
      <div className="flex justify-center ">
        <div className="mt-10">
          <h1 className="font-mammoth font-bold text-2xl text-center">
            Our Team
          </h1>
          <div className="flex justify-between mt-20 min-w-[60rem] lg:min-w-[80rem]">
            {/* you can pass images, roles, and links as a prop to these cards */}
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
      </div>
      <div className="h-72 w-[70rem] mt-20 bg-black border-[4px] border-gray-900 rounded-2xl px-8 py-10">
        <h2 className="text-gray-800 text-3xl">We only have one planet.</h2>
        <h1 className="font-bold text-4xl mt-4">
          Play Quiz without damaging the environment.
        </h1>
        <p className="text-gray-400 text-lg mt-5 w-4/6">
          By building on the Polygon blockchain, each transaction uses about
          0.35 Kwh energy and charges about $0.0003 as gas fees.
        </p>
      </div>
    </div>
  );
};

export default Team;

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center py-5 h-[16em] w-[14rem] bg-black border-[2px] border-gray-900 rounded-2xl">
      <div className=" h-24 w-24 bg-yellow-300 rounded-full">
        <img />
      </div>
      <div className="flex flex-col items-center mt-4">
        <h2 className="font-bold">Name Title</h2>
        <p className="text-gray-600">Role</p>
      </div>
      <div>
        <button className="flex mt-3">
          <a href="#">
            <BsGithub className="mx-2" />
          </a>
          <a href="#">
            <BsTwitter className="mx-2" />
          </a>
        </button>
      </div>
    </div>
  );
};
