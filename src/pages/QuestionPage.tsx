import { useEffect } from "react"
import { Question } from "../components/question/question"
import { useData } from "../contexts/dataContext"
import { Instructions } from "./instructions"

export const QuestionPage = () => {
    const {state:{arrayIndex,currentQuiz,selectedAnswer,confirmedAnswer,quizTitle},dataDispatch,checkAnswer,setShowInstructions} = useData()

    useEffect(() => {
        dataDispatch({type:"SET_ARRAY_INDEX",payload:0})
    }, [dataDispatch])

    useEffect(()=>{
        const answers =confirmedAnswer.find(item=>item.questionId===currentQuiz[arrayIndex].id)
        checkAnswer(answers)
    },[confirmedAnswer,arrayIndex,currentQuiz])
  
    
    return(
        <div className="flex mt-4 justify-center text-xl md:text-2xl flex-col border-grey border-2 rounded mx-5 xsm:mx-10 sm:mx-20 md:mx-40 lg:mx-60 p-6">
            {/* <button className="p2 px-4 bg-primaryColor rounded w-max hover:bg-primaryColor-dark "
            onClick={()=>setShowInstructions(true)}>show Instructions</button> */}
            <svg className="h-6 w-6 rounded-full shadow-inner hover:shadow-md "
            onClick={()=>setShowInstructions(true)} xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex justify-center text-3xl md:text-4xl">{quizTitle}</div>
            <Instructions currentQuiz={currentQuiz} quizTitle={quizTitle} />
            <Question questions={ currentQuiz[arrayIndex]} selectedOption={selectedAnswer} />
        </div>
    )
}