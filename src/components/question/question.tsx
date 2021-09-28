import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useData } from "../../contexts/dataContext"
import { QuestionType } from "../../types/quiz.type"




export function Question ({questions,selectedOption}:{questions:QuestionType,selectedOption:string|undefined, }) {

const {state:{arrayIndex,currentQuiz,confirmedAnswer,score},prevQuestion ,nextQuestion,setConfirmedAnswer,setScore} = useData()
const quizLength = currentQuiz.length
useEffect(()=>{
    console.log(`${confirmedAnswer} confirm`)
},[confirmedAnswer])
const btnStyle= "mx-1 xsm:m-2 p-2 xsm:px-4 rounded hover:shadow-lg "
    return(
        <div >
            {   questions?
                <div >
                    
                    <div className="flex flex-col ">
                        <div className="flex justify-between mt-4 text-gray-400 text-base md:text-xl text-xl ">
                            <p>Q.No: { arrayIndex+1}/{quizLength}</p>
                            <p>SCORE:{score}</p>
                        </div>
                        <p className="flex justify-center font-bold mt-8">{questions.question}</p>

                        <div className="flex flex-col flex-wrap justify-center mt-2">
                            {questions.options.map((option)=>(
                                        <button key={option.id} className={`p-2 mx-2 mb-2 border-2 shadow-inner rounded ${selectedOption===option.id?`bg-primaryColor hover:bg-primaryColor-dark`:
                                        `bg-gray-100 hover:bg-primaryColor-dark`}`} 
                                        // style={selectedOption===option.id ?{backgroundColor:"green"}:{backgroundColor:"transparent"}} 
                                        onClick={()=>{

                                            setConfirmedAnswer(questions.id,option.id,confirmedAnswer,questions)}}>
                                            {option.text}
                                        </button>
                                    ))
                            }
                        </div>
                    </div>
                    <div className="mt-6 flex flex-wrap flex-shrink justify-between flex-row">
                        {arrayIndex===0?
                        <Link to="/result" replace 
                        className={`${btnStyle} bg-red`}
                        onClick={()=>setScore(confirmedAnswer,currentQuiz)}>finish</Link>
                        :
                        <button 
                        className={`${btnStyle} bg-primaryColor-light`}
                        onClick={()=>prevQuestion(arrayIndex,quizLength)} >
                            prev
                        </button>
                        }

                        {
                            arrayIndex>0 && arrayIndex<quizLength-1?
                            <Link to="/result" replace 
                            className={`${btnStyle} bg-red`}
                            onClick={()=>setScore(confirmedAnswer,currentQuiz)}>finish</Link>
                            :
                            " "
                        }

                        {arrayIndex<quizLength-1?
                        <button 
                        className={`${btnStyle} bg-blue-500`}
                        onClick={()=>{
                                setScore(confirmedAnswer,currentQuiz) 
                                nextQuestion(arrayIndex,quizLength)
                            }} >
                                next
                        </button>
                        :
                        <Link to="/result" replace 
                        className={`${btnStyle} bg-red`}
                        onClick={()=>setScore(confirmedAnswer,currentQuiz)}>finish</Link>
                        }
                    </div>

                </div>
                :
                <div>
                    The quiz is ended  
                    <Link to="/result" replace
                    className={`${btnStyle} bg-red`}
                    >finish</Link>
                </div>
            }
        </div>
    )
}