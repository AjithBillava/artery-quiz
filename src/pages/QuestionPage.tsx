import { useEffect } from "react"
import { Question } from "../components/question/question"
import { useData } from "../contexts/dataContext"

export const QuestionPage = () => {
    const {state:{arrayIndex,currentQuiz,selectedAnswer,confirmedAnswer},dataDispatch,checkAnswer} = useData()
    // console.log(currentQuiz,quizID)
    const quizLength= currentQuiz.length
    useEffect(() => {
        dataDispatch({type:"SET_ARRAY_INDEX",payload:0})
    }, [dataDispatch])

    useEffect(()=>{
        const answers =confirmedAnswer.find(item=>item.questionId===currentQuiz[arrayIndex].id)
        checkAnswer(answers)
    },[confirmedAnswer,arrayIndex,currentQuiz])
    // useEffect(()=>{
    //     dataDispatch({type:"SET_SELECTED_ANSWER",payload:""})
    //     console.log(selectedAnswer)
    // },[selectedAnswer,dataDispatch])

    
    return(
        <div>
            <Question questions={ currentQuiz[arrayIndex<quizLength? arrayIndex:quizLength-1]} selectedOption={selectedAnswer} />
        </div>
    )
}