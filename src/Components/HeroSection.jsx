import React from "react";

export default function HeroSection() {
    return (
        <div className="h-[90vh] flex justify-center bg-primaryBg">
            <div className="h-screen w-screen mt-[30vh]">
                <img
                    height={"100%"}
                    width={"100%"}
                    className=""
                    alt="bg-img"
                    src="/images/herosec-bg.png"
                />
            </div>
            <div className="absolute mt-[100px] flex flex-col items-center gap-[50px]">
                <div className="flex flex-col items-center">
                    <h2 className="text-center text-base font-extrabold uppercase text-white/20">
                        Introducing CryptQuiz
                    </h2>
                    <h1 className="text-center w-[650px] leading-[60px] text-5xl font-extrabold">
                        Unlock the Future of Fair and{" "}
                        <span className="bg-gradient-to-r text-black from-[#05C9F9] to-[#E5F61B] px-3 rounded-lg leading-5">
                            Secure
                        </span>{" "}
                        Quiz Hosting
                    </h1>
                </div>
                <div className="flex justify-center items-center gap-[50px]">
                    <button className="px-5 py-3 bg-black/25 rounded-[10px] border-white/10 border-primaryWidth font-semibold text-lg">
                        Explore
                    </button>
                    <button className="px-5 py-3 bg-black/25 rounded-[10px] border-white/10 border-primaryWidth font-semibold text-lg">
                        Organize
                    </button>
                </div>
            </div>
        </div>
    );
};