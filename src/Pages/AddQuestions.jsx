import React, { useState } from 'react'
import GradientButton from '../Components/GradientButton';
import AuthHolder from '../Context/AuthHolder';
import Web3 from 'web3';

import { Web3Storage } from 'web3.storage'

let questionCID="";
let descriptionCID="";
let imageCID="";



const CONTRACT_ADDRESS = "0xF7A3330fD311807E41957DfeC29Cf5272a8C3091";
const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "walletId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_correctAnswer",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rank",
				"type": "uint256"
			}
		],
		"name": "completedQuiz",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "walletId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getCorrectAnswer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "walletId",
				"type": "string"
			}
		],
		"name": "getPastQuizes",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getQuizDescriptionCID",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getQuizId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getQuizImageCID",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getQuizIsExpired",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getQuizLeaderboard",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getQuizManager",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getQuizOrganizationName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getQuizPrizeMoney",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getQuizQuestionCID",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getQuizTheme",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getQuizTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getQuizTotalQuestions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getQuiztotalParticipants",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "walletId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getRank",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "walletId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "getScore",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_theme",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_prizeMoney",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_questionCID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_imageCID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_descriptionCID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_totalQuestions",
				"type": "uint256"
			}
		],
		"name": "listQuiz",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_winner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "prizeDispersal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "quizId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_score",
				"type": "uint256"
			}
		],
		"name": "setLeaderboard",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_totalParticipants",
				"type": "uint256"
			}
		],
		"name": "setQuiztotalParticipants",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];







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
	questionCID=cid;
    return cid
}

async function storeDescription(description) {
    const files = await makeFileObjects(description);
    console.log("Uploading Description to IPFS with web3.storage....");
    const client = makeStorageClient()
    const cid = await client.put(files, { wrapWithDirectory: false })
    console.log('stored Description with cid:', cid)
	descriptionCID=cid;
    return cid
}

const storeImage = async (files) => {
    console.log("Uploading image to IPFS with web3.storage....");
    const client = makeStorageClient();
    const cid = await client.put([files], { wrapWithDirectory: false });
    console.log("Stored Image with cid:", cid);
	imageCID=cid;
    return cid;
};


export default function AddQuestions() {

	

	const {auth,account} = AuthHolder();
	const web3 = new Web3(auth.provider);

	const ListQuiz = async () => {	

	const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
	const prizeMoney = web3.utils.toWei(`${prize}`,'ether')

	contract.methods.listQuiz(orgName,topic,noOfQuestions*30,prize,questionCID,imageCID,descriptionCID,noOfQuestions).send({from: `${account}`,value: prizeMoney}, function(error, result){
  		console.log(result)  
	})

	}


    const [orgName, setOrgName] = useState('');
    const [topic, setTopic] = useState('');
    const [desc, setDesc] = useState('');
    const [prize, setPrize] = useState('');
    const [image, setImage] = useState()

    const [questions, setQuestions] = useState([{ question: "", option1: "", option2: "", option3: "", option4: "" }]);

    const handleSubmit = async () => {

        await storeFiles(questions)
        await storeImage(image)
		await storeDescription(desc)
		await ListQuiz()
    }

	let noOfQuestions = 1;

	const incQues = () => {
		setQuestions([...questions, { question: "", option1: "", option2: "", option3: "", option4: "" }])
		noOfQuestions++;
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

                    <GradientButton text={"Add another question"} className="mb-10 w-full" onClick={/*() => setQuestions([...questions, { question: "", option1: "", option2: "", option3: "", option4: "" }])*/() => incQues()} />
					
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