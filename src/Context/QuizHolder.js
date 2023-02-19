import React, { useState, createContext } from 'react';

const QuizContext = createContext();

export default function QuizHolder(props) {

    const [score, setScore] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [wrong, setWrong] = useState(0)

    const setTheScore = (_score) => {
        setScore(_score)
    }

    return (
        <QuizContext.Provider value={{
            score, setTheScore, correct, wrong, setCorrect, setWrong
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext }
