import { Link } from "react-router-dom"
import { useData } from "../../contexts/dataContext"
import { QuestionType } from "../../types/quiz.type"




export function Question ({questions,selectedOption}:{questions:QuestionType,selectedOption:string|undefined, }) {

const {state:{arrayIndex,currentQuiz,confirmedAnswer},prevQuestion ,nextQuestion,setConfirmedAnswer} = useData()
// const {question,options} = questions
const quizLength = currentQuiz.length
// console.log(quizLength)

// useEffect(()=>{
//     const answers =confirmedAnswer.find(item=>item.questionId===questions.id)
//     checkAnswer(answers)
// },[confirmedAnswer,checkAnswer,arrayIndex,questions])
// const {question,options} = item
    return(
        <>
            {   questions?
                <div>
                    
                    <div>
                        <h2>{arrayIndex<quizLength? arrayIndex+1:arrayIndex} {questions.question}</h2>
                        {/* {score} */}
                        {questions.options.map((option)=>(
                                    <button style={selectedOption===option.id ?{backgroundColor:"green"}:{backgroundColor:"transparent"}} onClick={()=>{
                                        // checkAnswer(option)
                                        // checkAnswer(questions,confirmedAnswer)
                                        setConfirmedAnswer(questions.id,option.id,confirmedAnswer,questions)}}>
                                        {option.text}
                                    </button>
                                ))
                        }
                    </div>
                    <div>
                        {arrayIndex===0?
                        <Link to="/result" replace>finish</Link>
                        :
                        <button onClick={()=>prevQuestion(arrayIndex,quizLength)} >prev</button>
                        }

                        {
                            arrayIndex>0 && arrayIndex<quizLength-1?
                            <Link to="/result" replace>finish</Link>
                            :
                            " "
                        }

                        {arrayIndex<quizLength-1?
                        <button onClick={()=>nextQuestion(arrayIndex,quizLength)} >next</button>
                        :
                        <Link to="/result" replace>finish</Link>
                        }
                    </div>

                </div>
                :
                <div>
                    The quiz is ended  
                    <Link to="/result" replace>finish</Link>
                </div>
            }
        </>
    )
}