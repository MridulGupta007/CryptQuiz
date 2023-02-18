import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import QuizHolder from "./Context/QuizHolder";
import AuthHolder from "./Context/AuthHolder";

import Home from "./Pages/Home";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import AddQuestions from "./Pages/AddQuestions";
import QuizStart from "./Pages/QuizStart";
import Quiz from "./Pages/Quiz";
import QuizResult from "./Pages/QuizResult";


function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/host-quiz",
            element: <AddQuestions />,
        },
        {
            path: "/quiz-start",
            element: <QuizStart />,
        },
        {
            path: "/quiz",
            element: <Quiz />,
        },
        {
            path: "/quiz-result",
            element: <QuizResult />,
        },
    ]);


    const { loading } = AuthHolder();


    return (
        <div className="bg-primaryBg flex flex-col text-white font-inter min-h-screen">

            <Header />

            <QuizHolder>
                {
                    loading
                        ? <Loader />
                        : <RouterProvider router={router} />
                }
            </QuizHolder>

            {/* <Footer /> */}

        </div>
    );
}

export default App;
