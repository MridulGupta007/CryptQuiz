import React from 'react'
// import { NavLink } from 'react-router-dom'

import LoginBtn from './LoginBtn'


export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center px-12 xl:px-32 h-20">
            {/* <NavLink to="/" replace={true}> */}
            <p className='font-mammoth font-normal text-[35px] leading-[36px] text-white/80'>CryptQuiz</p>
            {/* </NavLink> */}

            <div className='flex flex-row items-center gap-24'>
                <ul className="flex items-center justify-center gap-12 font-semibold text-sm text-white/90">
                    <li className="cursor-pointer">Register Quiz</li>
                    <li className="cursor-pointer">Profile</li>
                </ul>
                <div className='flex items-center justify-center gap-6 font-semibold text-sm text-white/90'>
                    <p className="cursor-pointer">Login</p>
                    <LoginBtn />
                </div>
            </div>
        </div>
    )
}
