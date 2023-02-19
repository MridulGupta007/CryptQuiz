import React, { useState } from 'react'
import GradientButton from '../Components/GradientButton';

import { Web3Storage } from 'web3.storage'


function getAccessToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDI1MDQ3MDFlNEE1QTdGYzZDN2E1MTVEOWQ2NzliMWYwRUJlOTJCQzQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwMzE3NzMxMjUsIm5hbWUiOiJEZW1vV2ViM1N0b3JhZ2UifQ.weNDPksDEyYK9yPiGK1MScTvW28Wi958gzcttMFrVF4'
}


function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}

async function makeFileObjects(questions) {

    const blob = new Blob([JSON.stringify(questions)], { type: 'application/json' })

    const files = [
        new File([blob], 'nftInfo.json')
    ]
    console.log(files)
    return files
}

async function storeFiles(questions) {
    const files = await makeFileObjects(questions);
    console.log("Uploading Questions to IPFS with web3.storage....");
    const client = makeStorageClient()
    const cid = await client.put(files, { wrapWithDirectory: false })
    console.log('stored Questions with cid:', cid)
    return cid
}

const storeImage = async (files) => {
    console.log("Uploading image to IPFS with web3.storage....");
    const client = makeStorageClient();
    const cid = await client.put([files], { wrapWithDirectory: false });
    console.log("Stored Image with cid:", cid);
    return cid;
};


export default function AddQuestions() {

    const [orgName, setOrgName] = useState('');
    const [topic, setTopic] = useState('');
    const [desc, setDesc] = useState('');
    const [prize, setPrize] = useState('');
    const [image, setImage] = useState()

    const [questions, setQuestions] = useState([{ question: "", option1: "", option2: "", option3: "", option4: "" }]);

    const handleSubmit = async () => {

        await storeFiles(questions)
        await storeImage(image)
    }


    return (
        <div className="flex flex-col items-center mt-24 xl:px-32 w-full h-full flex-1 gap-12">

            <div className='w-full flex flex-col items-center gap-4'>
                <h2 className="font-mammoth text-2xl text-white/80 text-center">Quiz Details</h2>
                <div className="flex flex-col justify-center items-center py-7 gap-7 w-full h-full bg-black/25 border-white/10 border-primaryWidth rounded-3xl">

                    <div className='w-2/3 flex flex-row items-center gap-[10px] my-2 text-semibold text-base text-white/80'>
                        <p>Organization Name: </p>
                        <Input value={orgName} onChange={(e) => setOrgName(e.target.value)} />
                    </div>

                    <div className='w-2/3 flex flex-row items-center gap-[10px] my-2 text-semibold text-base text-white/80'>
                        <p>Quiz Topic: </p>
                        <Input value={topic} onChange={(e) => setTopic(e.target.value)} />
                    </div>

                    <div className='w-2/3 flex flex-row items-center gap-[10px] my-2 text-semibold text-base text-white/80'>
                        <p>Description: </p>
                        <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                    </div>

                    <div className='w-2/3 flex flex-row items-center gap-[10px] my-2 text-semibold text-base text-white/80'>
                        <p>Prize money <span className='text-xs text-white/50'>(in ETH)</span>: </p>
                        <Input value={prize} onChange={(e) => setPrize(e.target.value)} />
                    </div>

                </div>
            </div>


            <div className='w-full flex flex-col items-center gap-4'>
                <h2 className="font-mammoth text-2xl text-white/80 text-center">Add Questions</h2>
                <div className="flex flex-col justify-center items-center w-full h-full px-10 bg-black/25 border-white/10 border-primaryWidth rounded-3xl divide-y divide-white/20">

                    {
                        questions && console.log(questions)}
                    {
                        questions &&
                        questions.map((item, index) => {
                            return (
                                <div className='flex flex-col justify-center items-center gap-5 w-full py-7'>
                                    <div className='w-2/3 flex flex-row items-center gap-[10px] text-semibold text-base text-white/80'>
                                        <p>Question {index + 1}: </p>
                                        <Input value={item.question} onChange={(e) => {
                                            const Temp = questions.map((v, i) => {
                                                if (i === index) {
                                                    return { question: e.target.value, option1: v.option1, option2: v.option2, option3: v.option3, option4: v.option4 }
                                                }
                                                else {
                                                    return v
                                                }
                                            })
                                            setQuestions(Temp)
                                        }} />
                                    </div>

                                    <div className='w-2/3 flex flex-row items-center gap-[10px] text-semibold text-base text-white/80'>
                                        <p>Option 1 <span className='text-xs text-white/50'>(Correct answer)</span>: </p>
                                        <Input value={item.option1} onChange={(e) => {
                                            const Temp = questions.map((v, i) => {
                                                if (i === index) {
                                                    return { question: v.question, option1: e.target.value, option2: v.option2, option3: v.option3, option4: v.option4 }
                                                }
                                                else {
                                                    return v
                                                }
                                            })
                                            setQuestions(Temp)
                                        }} />
                                    </div>
                                    <div className='w-2/3 flex flex-row items-center gap-[10px] text-semibold text-base text-white/80'>
                                        <p>Option 2: </p>
                                        <Input value={item.option2} onChange={(e) => {
                                            const Temp = questions.map((v, i) => {
                                                if (i === index) {
                                                    return { question: v.question, option1: v.option1, option2: e.target.value, option3: v.option3, option4: v.option4 }
                                                }
                                                else {
                                                    return v
                                                }
                                            })
                                            setQuestions(Temp)
                                        }} />
                                    </div>
                                    <div className='w-2/3 flex flex-row items-center gap-[10px] text-semibold text-base text-white/80'>
                                        <p>Option 3: </p>
                                        <Input value={item.option3} onChange={(e) => {
                                            const Temp = questions.map((v, i) => {
                                                if (i === index) {
                                                    return { question: v.question, option1: v.option1, option2: v.option2, option3: e.target.value, option4: v.option4 }
                                                }
                                                else {
                                                    return v
                                                }
                                            })
                                            setQuestions(Temp)
                                        }} />
                                    </div>
                                    <div className='w-2/3 flex flex-row items-center gap-[10px] text-semibold text-base text-white/80'>
                                        <p>Option 4: </p>
                                        <Input value={item.option4} onChange={(e) => {
                                            const Temp = questions.map((v, i) => {
                                                if (i === index) {
                                                    return { question: v.question, option1: v.option1, option2: v.option2, option3: v.option3, option4: e.target.value }
                                                }
                                                else {
                                                    return v
                                                }
                                            })
                                            setQuestions(Temp)
                                        }} />
                                    </div>
                                </div>
                            )
                        })
                    }

                    <GradientButton text={"Add another question"} className="mb-10 w-full" onClick={() => setQuestions([...questions, { question: "", option1: "", option2: "", option3: "", option4: "" }])} />

                </div>
            </div>

            <div className='w-full flex flex-col items-center gap-4'>
                <h2 className="font-mammoth text-2xl text-white/80 text-center">Image</h2>
                <div className="flex flex-col justify-center items-center py-7 gap-7 w-full h-full bg-black/25 border-white/10 border-primaryWidth rounded-3xl">

                    <div className='w-2/3 flex flex-row items-center gap-[10px] my-2 text-semibold text-base text-white/80'>
                        <p>Poster Image <span className='text-xs text-white/50'>(500x300)</span>: </p>
                        <input type="file" className="flex-1 py-[5px] px-4 outline-none focus:bg-white/5 bg-black/25  border-white/10 border-primaryWidth rounded-lg transition" accept="image/png, image/jpeg" onChange={(e) => setImage(e.target.files[0])} />
                    </div>

                </div>
            </div>

            <GradientButton text={"Organize Quiz"} className="mb-10 w-full" onClick={handleSubmit} />

        </div>
    )
}

const Input = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            className="flex-1 py-[5px] px-4 outline-none focus:bg-white/5 bg-black/25  border-white/10 border-primaryWidth rounded-lg transition" />
    )
}