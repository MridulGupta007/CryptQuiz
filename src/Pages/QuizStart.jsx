import React from 'react'
import ETHImage from "../Assets/Eth.png"

import GradientButton from "../Components/GradientButton"
import { NavLink } from 'react-router-dom';

export default function QuizStart() {


    return (
        <div className="flex flex-col justify-center items-center xl:px-32 w-full h-full flex-1 gap-24">

            <div className="flex flex-col justify-center items-center py-7 gap-7 w-full h-full bg-black/25 border-white/10 border-primaryWidth rounded-3xl my-8">
                <img src={ETHImage} alt="" />

                <div className='flex flex-col items-center p-0 gap-5 w-1/2'>
                    <div className='flex flex-col items-center p-0 gap-[10px]'>
                        <h2 className='font-bold text-3xl text-center text-white/80'>What is Ethereum</h2>
                        <p className='font-medium text-sm text-center text-white/50'>Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more. It's open to everyone, wherever you are in the world – all you need is the internet.</p>
                    </div>

                    <div className='flex flex-row justify-center items-center p-0 gap-[10px] text-sm text-white/50 font-bold'>
                        <p>20 questions</p>
                        <p>•</p>
                        <p>10 minutes</p>
                        <p>•</p>
                        <p>5 ETH</p>
                    </div>

                    <p className='text-base text-center font-semibold text-white/80'>25 February, 9:00 PM</p>

                    <NavLink to="/quiz" className="w-full" replace={true}>
                        <GradientButton text="Starting in 02:43:22" />
                    </NavLink>

                </div>
            </div>

        </div>
    )
}