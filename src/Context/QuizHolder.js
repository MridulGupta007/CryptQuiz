import React, { useState, createContext } from 'react';

const QuizContext = createContext();

export default function QuizHolder(props) {

    const [score, setScore] = useState(0)

    return (
        <QuizContext.Provider value={{ score }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext }
