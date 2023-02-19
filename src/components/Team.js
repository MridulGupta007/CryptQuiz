import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
//import profiles from "./Details/teamDetails.js";
import {useState} from "react";

const Team = () => {
    return (
        <div className="flex flex-col items-center gap-[150px] bg-primary">
            <div className="flex justify-center ">
                <div className="mt-10">
                    <h1 className="font-mammoth font-bold text-2xl text-center">
                        Our Team
                    </h1>
                    <div className="flex justify-between mt-20 min-w-[60rem] lg:min-w-[80rem]">
                        {/* you can pass images, roles, and links as a prop to these cards */}
                        <ProfileCard src="./Images/Ankit.png" name="Ankit Choudhary" roles="Blockchain Developer"/>
                        <ProfileCard src="./Images/Atharv.png" name="Atharv Varshney" roles="Front-End Developer"/>
                        <ProfileCard src="./Images/Gourav.png" name="Gourav Kumar" roles="Front-End Developer"/>
                        <ProfileCard src="./Images/Mridul.png" name="Mridul Gupta" roles="Front-End Developer"/>
                    </div>
                </div>
            </div>
            <div className="w-2/3 bg-black/25 rounded-[20px] border-white/10 border-primaryWidth px-14 py-16 flex flex-col justify-center gap-[20px]">
                <h2 className="font-semibold text-xl text-white/20">We only have one planet.</h2>
                <h1 className="font-bold text-3xl text-white">
                    Play Quiz without damaging the environment.
                </h1>
                <p className="font-medium text-white/60 text-base">
                    By building on the Polygon blockchain, each transaction uses about
                    0.35 Kwh energy and charges about $0.0003 as gas fees.
                </p>
            </div>
        </div>
    );
};

export default Team;

const ProfileCard = ({name, roles, src}) => {
    
    return (
        
        <div className="flex flex-col items-center py-5 h-[16em] w-[14rem] bg-black border-[2px] border-gray-900 rounded-2xl">
            <div className=" h-24 w-24 bg-yellow-300 rounded-full">
                <img src={src}/>
            </div>
            <div className="flex flex-col items-center mt-4">
                <h2 className="font-bold">{name}</h2>
                <p className="text-gray-600">{roles}</p>
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
