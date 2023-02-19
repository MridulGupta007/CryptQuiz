import React from 'react';
import quizInfo from '../Details/quizInfo';
import {useState} from 'react';

export default function QuizResult() {
    const [detail] = useState(quizInfo[0])
    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-[50px]'>QuizResult</h2>
            <div className='flex flex-col items-center'>
                <h3 className='text-[30px]'>{detail.title}</h3>
                <p className='text-[20px]'>{detail.description}</p>
                <div>
                    <ul className='flex justify-between'>
                        <li>{detail.questions}</li>
                        <li>{detail.time}</li>
                        <li>{detail.reward}</li>
                    </ul>
                </div>
            </div>
            <div>
                {/*Circular Component Call*/}
                <button>{/*Fetch details from IPFS*/}<br />Correct Answers</button>
                <button>{/*Fetch details from IPFS*/}<br />Wrong Answers</button>
            </div>




        </div>
    )
}
