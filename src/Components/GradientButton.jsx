import React from 'react'

export default function GradientButton({ text, className, onClick }) {
    return (
        <button onClick={onClick} className={"flex justify-center items-center py-3 px-6 bg-primaryDarkGradient rounded-xl text-[15px] leading-[18px] font-semibold text-black w-full " + className}>{text}</button>
    )
}
