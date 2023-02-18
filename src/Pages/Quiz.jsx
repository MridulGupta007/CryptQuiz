import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import GradientButton from '../Components/GradientButton'

export default function Quiz() {

    const [selected, setSelected] = useState(null)

    return (
        <div className="flex flex-col justify-center items-center xl:px-32 w-full h-full flex-1 gap-[75px]">
            <div className='flex flex-row justify-center items-center px-[30px] py-[20px] bg-black/25 rounded-[20px] font-extrabold leading-[48px] border-white/10 border-primaryWidth'>
                <p className='text-white text-3xl mr-[5px]'>28</p>
                <span className="text-white/50 text-2xl">seconds left</span>
            </div>

            <div className='flex flex-col justify-center items-center p-[25px] gap-[50px] w-full h-full bg-black/25 border-white/10 border-primaryWidth rounded-3xl'>

                <div className='flex flex-col items-start p-0 gap-7 w-full'>
                    <p className='text-2xl font-semibold'>
                        <span className='mr-1'>Q.3</span>
                        <span className='text-lg font-medium text-white/50 mr-4'>/20</span>
                        Which among the following is a difference between Bitcoin and Ethereum?</p>

                    <div className='flex flex-col gap-4'>

                        <AnswerTile
                            text="Ethereum uses PoS while Bitcoin uses PoW."
                            index={0}
                            selected={selected}
                            setSelected={setSelected} />
                        <AnswerTile
                            text="Bitcoin scrypt is turing-complete while Ethereum's Solidity is turing-incomplete."
                            index={1}
                            selected={selected}
                            setSelected={setSelected} />
                        <AnswerTile
                            text="Ethereum is more accepted compared to Bitcoin."
                            index={2}
                            selected={selected}
                            setSelected={setSelected} />
                        <AnswerTile
                            text="Ethereum is deflationary while Bitcoin is inflationary."
                            index={3}
                            selected={selected}
                            setSelected={setSelected} />

                    </div>
                </div>

                <NavLink to="/quiz-result" className="w-full" replace={true}>
                    <GradientButton className="font-bold" text={"Submit"} />
                </NavLink>
            </div>
        </div>
    )
}

const AnswerTile = ({ text, index, selected, setSelected }) => {
    return (
        <p className={`cursor-pointer active:bg-white/20 hover:bg-white/10 py-[10px] px-[15px] bg-white/5 rounded-[10px] text-white/80 text-lg font-medium ${selected === index && "bg-white/20"}`}
            onClick={() => setSelected(index)}>
            <span className='font-bold mr-2'>{"A)"}</span>
            {text}
        </p>
    )
}