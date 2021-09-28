import { useEffect } from "react"
import { Question } from "../components/question/question"
import { useData } from "../contexts/dataContext"

export const QuestionPage = () => {
    const {state:{arrayIndex,currentQuiz,selectedAnswer,confirmedAnswer,quizTitle},dataDispatch,checkAnswer} = useData()

    useEffect(() => {
        dataDispatch({type:"SET_ARRAY_INDEX",payload:0})
    }, [dataDispatch])

    useEffect(()=>{
        const answers =confirmedAnswer.find(item=>item.questionId===currentQuiz[arrayIndex].id)
        checkAnswer(answers)
    },[confirmedAnswer,arrayIndex,currentQuiz])
  
    
    return(
        <div className="flex mt-4 justify-center text-xl md:text-2xl flex-col border-grey border-2 rounded mx-5 xsm:mx-10 sm:mx-20 md:mx-40 lg:mx-60 p-6">
            <div className="flex justify-center text-3xl md:text-4xl">{quizTitle}</div>
            
            <Question questions={ currentQuiz[arrayIndex]} selectedOption={selectedAnswer} />
        </div>
    )
}