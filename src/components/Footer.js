import React from "react";
import { ReactComponent as Logo } from "../Assets/logo.svg";

const Footer = () => {
    return (
        <div className="flex justify-between items-center mt-[100px] px-12 xl:px-32 py-[25px] bg-black/25 rounded-t-[20px] border-white/10 border-primaryWidth">
            <p className='font-mammoth font-normal text-[30px] leading-[32px] text-white/80'>CryptQuiz</p>
            <p className="text-white/50">Built by amazing peeps. All rights reserved.</p>
        </div>
    );
};

export default Footer;
