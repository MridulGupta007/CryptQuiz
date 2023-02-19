import React, { useEffect, useState } from 'react'
import AuthHolder from '../Context/AuthHolder';

export default function LoginBtn() {

    const {
        loggedIn,
        account,
        login,
        logout,
    } = AuthHolder();

    const [trimmedAddress, setTrimmedAddress] = useState("...")


    const handleClick = async () => {
        if (loggedIn) {
            logout()
        }
        else {
            login("google")
        }
    }

    useEffect(() => {

        setTrimmedAddress(account
            ? account.slice(0, 4) + '...' + account.slice(-4)
            : '...')

    }, [account])




    return (

        <div className='flex items-center justify-center gap-6 font-semibold text-sm text-white/90'>
            {!loggedIn && <p className="cursor-pointer">Login</p>}
            <button onClick={handleClick} className='flex justify-center items-center py-3 px-6 bg-primaryDarkGradient rounded-xl text-[15px] leading-[18px] font-semibold text-black'>{loggedIn ? trimmedAddress : "Signup"}</button>
        </div>

    )
}