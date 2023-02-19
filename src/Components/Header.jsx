import React from 'react'
import { NavLink } from 'react-router-dom'

import LoggedInStatus from './LoggedInStatus'


export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center px-12 xl:px-32 h-20">
            <NavLink to="/" replace={true}>
                <p className='font-mammoth font-normal text-[35px] leading-[36px] text-white/80'>CryptQuiz</p>
            </NavLink>

            <div className='flex flex-row items-center gap-24'>
                <ul className="flex items-center justify-center gap-12 font-semibold text-sm text-white/90">
                    <NavLink to="/host-quiz" replace={true}><li className="cursor-pointer">Register Quiz</li></NavLink>
                    <NavLink to="/profile" replace={true}><li className="cursor-pointer">Profile</li></NavLink>
                </ul>
                <LoggedInStatus />
            </div>
        </div>
    )
}
