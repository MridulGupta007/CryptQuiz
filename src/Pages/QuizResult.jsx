import React from 'react';
import quizInfo from '../Details/quizInfo';
import {useState} from 'react';

export default function QuizResult() {
    const [detail] = useState(quizInfo[0])
    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-[50px]'>Quiz Result</h2>
            <div className='flex-col items-center w-96 border-[#808080] border-[0.1px] border rounded-xl h-80 mb-2'>
                <h3 className='text-[30px] text-center mb-5'>{detail.title}</h3>
                <p className='text-[15px] flex justify-center text-center mb-10'>{detail.description}</p>
                <div className=''>
                    <ul className='flex justify-between'>
                        <li>{detail.questions}</li>
                        <li>{detail.time}</li>
                        <li>{detail.reward}</li>
                    </ul>
                </div>
            </div>
            <div>
                {/*Circular Component Call*/}
                <button className="bg-green-600 h-20 w-40 rounded-full mx-2">{/*Fetch details from IPFS*/}4 <br />Correct Answers</button>
                <button className='bg-red-600 h-20 w-40 rounded-full'>{/*Fetch details from IPFS*/}3 <br />Wrong Answers</button>
            </div>




        </div>
    )
}
