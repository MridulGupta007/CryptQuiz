import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import QuizHolder from "./Context/QuizHolder";
import AuthHolder from "./Context/AuthHolder";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AddQuestions from "./Pages/AddQuestions";
import QuizStart from "./Pages/QuizStart";
import Quiz from "./Pages/Quiz";
import QuizResult from "./Pages/QuizResult";

const AppendHeaderFooter = ({ Comp }) => {
    return (
        <>
            <Header />
            <Comp />
            <Footer />
        </>
    )
}

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppendHeaderFooter Comp={Home} />,
        },
        {
            path: "/host-quiz",
            element: <AppendHeaderFooter Comp={AddQuestions} />,
        },
        {
            path: "/profile",
            element: <AppendHeaderFooter Comp={Profile} />,
        },
        {
            path: "/quiz-start",
            element: <AppendHeaderFooter Comp={QuizStart} />,
        },
        {
            path: "/quiz",
            element: <AppendHeaderFooter Comp={Quiz} />,
        },
        {
            path: "/quiz-result",
            element: <AppendHeaderFooter Comp={QuizResult} />,
        },
    ]);


    const { loading } = AuthHolder();


    return (
        <div className="bg-primaryBg flex flex-col text-white font-inter min-h-screen">

            {/* <Header /> */}

           { <QuizHolder>
                {
                    loading
                        ? <Loader />
                        : <RouterProvider router={router} />
                }
            </QuizHolder>}

            {/* <Footer /> */}

        </div>
    );
}

export default App;
