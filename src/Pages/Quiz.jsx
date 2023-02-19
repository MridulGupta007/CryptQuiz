import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown'
import Loader from '../Components/Loader'

import GradientButton from '../Components/GradientButton'
import { QuizContext } from '../Context/QuizHolder'


export default function Quiz() {

    const questions = [
        {
            "question": "Which among the following is a difference between Bitcoin and Ethereum?",
            "option1": "Ethereum uses PoS while Bitcoin uses PoW.",
            "option2": "Ethereum is more accepted compared to Bitcoin.",
            "option3": "Ethereum is deflationary while Bitcoin is inflationary.",
            "option4": "Bitcoin scrypt is turing-complete while Ethereum's Solidity is turing-incomplete."
        },
        {
            "question": "cdfgvhbjnk",
            "option1": "Answer",
            "option2": "gvhbjnk",
            "option3": "ctvyubn",
            "option4": "gtfyubhin"
        }
    ]

    const DoNotRemoveMe = 1;

    const [loading, setLoading] = useState(false)
    const [remainingSeconds, setRemainingSeconds] = useState(20)
    const [selected, setSelected] = useState(null)
    const [answer, setAnswer] = useState("")
    const [questionInd, setQuestionInd] = useState(0)
    const [suffledArr, setSuffledArr] = useState(null)
    const [question, setQuestion] = useState("")
    const [opt1, setOpt1] = useState("")
    const [opt2, setOpt2] = useState("")
    const [opt3, setOpt3] = useState("")
    const [opt4, setOpt4] = useState("")
    const { setScore, score } = QuizContext;

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const LoadQuestion = (ind) => {

        setLoading(true)

        setAnswer(questions[ind].option1);

        const tempArr = [questions[ind].option1, questions[ind].option2, questions[ind].option3, questions[ind].option4]
        const suffledArr = shuffle(tempArr);
        console.log(suffledArr)

        setSuffledArr(suffledArr)

        setQuestion(questions[ind].question)
        setOpt1(suffledArr[0])
        setOpt2(suffledArr[1])
        setOpt3(suffledArr[2])
        setOpt4(suffledArr[3])

        setLoading(false)
    }

    // useEffect(() => {
    //     LoadQuestion(questionInd)
    // }, [2])



    const ButtonClicked = () => {
        if (selected) {
            if (suffledArr[selected] === answer) {
                console.log("correct")
                setScore(score + 50 + remainingSeconds)
            }
            else {
                console.log("wrong", selected)
            }
        }
    }

    const renderer = ({ seconds, completed }) => {
        // setRemainingSeconds(seconds)
        if (completed) {
            ButtonClicked()
            return <span>{seconds}</span>;
        } else {
            return <span>{seconds}</span>;
        }
    };



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
                        {question}
                    </p>

                    <div className='flex flex-col gap-4'>

                        <AnswerTile
                            text={opt1}
                            index={0}
                            selected={selected}
                            setSelected={setSelected} />
                        <AnswerTile
                            text={opt2}
                            index={1}
                            selected={selected}
                            setSelected={setSelected} />
                        <AnswerTile
                            text={opt3}
                            index={2}
                            selected={selected}
                            setSelected={setSelected} />
                        <AnswerTile
                            text={opt4}
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