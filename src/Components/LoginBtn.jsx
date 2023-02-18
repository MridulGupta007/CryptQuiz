import React, { useEffect } from 'react'
import AuthHolder from '../Context/AuthHolder';

export default function LoginBtn() {

    const {
        loggedIn,
        account,
        login,
        logout
    } = AuthHolder();


    const handleClick = async () => {
        if (loggedIn) {
            logout()
        }
        else {
            login("google")
        }
    }

    useEffect(() => {
        console.log(account)
    }, [account])




    return (
        <button onClick={handleClick} className='flex justify-center items-center py-3 px-6 bg-primaryDarkGradient rounded-xl text-[15px] leading-[18px] font-semibold text-black'>{loggedIn ? "Logout" : "Signup"}</button>
    )
}