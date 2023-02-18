import React, {Fragment} from "react";
import quizInfo from "../Details/quizInfo";
import { useState } from "react";


const Profile = () =>{

    const [detail, setDetail] = useState(quizInfo);

    return (
        <Fragment>

            <section className="flex flex-col justify-center items-center" >
                <div className="flex gap-3 justify-around items-center">
                    <h2 className="text-[50px]">Hi, Mridul<span></span></h2>
                    <button className="bg-gradient-to-r from-[#05C9F9] to-[#E5F61B] rounded-[10px] p-2 text-black text-sm">Host a quiz</button>
                </div>
               
               
               
               
                <div className="flex justify-center">
                    <h3 className="text-[50px]">Your Past Quizzes</h3>
                </div>
            
                <div className="flex flex-col gap-4 lg:flex-row justify-center mb-10">

                    {
                        detail.map((detail) =>{
                            return(
                                <div className="mx-0 lg:mx-4">
                            <div className="single-quiz">
                            <div className="border-solid border-[#808080] border-[0.1px] rounded-[15px] hover:scale-105 ease-in-out duration-100">
                                <div className="quiz-thumb mb-2">
                                    <img src={detail.image} alt="image" className="rounded-[10px]" />                              
                           
                                </div>

                                <div className="flex justify-between mb-8 items-center mx-2">
                                    <button className="bg-gradient-to-r from-[#05C9F9] to-[#E5F61B] rounded-[13px] p-2 text-black text-sm">{detail.publisher}</button>
                                    <h4 className="text-[#808080]">{detail.questions}</h4>
                                    <h4 className="text-[#808080]">{detail.time}</h4>
                                    <h4 className="text-[#808080]">{detail.reward}</h4>
                                </div>

                                <div className="text-[25px] mb-8 mx-2">
                                    <h2>{detail.title}</h2>
                                </div>

                                <div>
                                    <ul className="flex justify-between text-[10px] mx-2">
                                        <li>
                                            <span>{detail.date_time}</span>

                                        </li>
                                        <li>
                                            <span>Score: {detail.score}</span>
                                        </li>
                                        <li> 
                                            <span>Rank: {detail.rank}</span>
                                        </li>

                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>

                            )
                        })
                    }


                    

                </div>


                <div className="flex justify-center">
                    <h3 className="text-[50px]">Your Certificates</h3>
                </div>



                <div className="flex flex-col gap-4 lg:flex-row justify-center mb-10">

{
    detail.map((detail) =>{
        return(
            <div className="mx-0 lg:mx-4">
        <div className="single-quiz">
        <div className="border-solid border-[#808080] border-[0.1px] rounded-[15px] hover:scale-105 ease-in-out duration-100">
            <div className="quiz-thumb mb-2">
                <img src={detail.image} alt="image" className="rounded-[10px]" />                              
       
            </div>

            <div className="flex justify-between mb-8 items-center mx-2">
                <button className="bg-gradient-to-r from-[#05C9F9] to-[#E5F61B] rounded-[13px] p-2 text-black text-sm">{detail.publisher}</button>
                <h4 className="text-[#808080]">{detail.questions}</h4>
                <h4 className="text-[#808080]">{detail.time}</h4>
                <h4 className="text-[#808080]">{detail.reward}</h4>
            </div>

            <div className="text-[25px] mb-8 mx-2">
                <h2>{detail.title}</h2>
            </div>

            <div>
                <ul className="flex justify-between text-[10px] mx-2">
                    <li>
                        <span>{detail.date_time}</span>

                    </li>
                    <li>
                        <span>Score: {detail.score}</span>
                    </li>
                    <li> 
                        <span>Rank: {detail.rank}</span>
                    </li>

                </ul>
            </div>


        </div>
    </div>
</div>

        )
    })
}




</div>

            
            
            </section>
            



        </Fragment>
    )
}

export default Profile