import React from "react";

export default function HeroSection() {
    return (
        <div className="h-[90vh] flex justify-center bg-primaryBg ">
            <div className="h-screen w-screen mt-[40vh]">
                <img
                    height={"100%"}
                    width={"100%"}
                    className=""
                    alt="bg-img"
                    src="/images/heroBg.png"
                />
            </div>
            <div className="absolute  mt-32">
                <h2 className="text-center text-xl font-bold uppercase text-gray-700">
                    Introducing CryptoQuiz
                </h2>
                <h1 className="mt-5 text-center w-[30rem] text-4xl font-bold">
                    Unlock the Future of Fair and{" "}
                    <span className="bg-gradient-to-r text-black from-[#05C9F9] to-[#E5F61B] px-3 rounded-lg leading-5">
                        Secure
                    </span>{" "}
                    Quiz Hosting
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