import { useEffect } from "react"
import { useData } from "../../contexts/dataContext"
import { quizOne } from "../../data/quiz.data"
import {Answer} from "../../types/quiz.type"
import { QuizThumbnail } from "../quizThumbnail/quizThumbnail"

export const Quiz =() =>{ 
    const{dataDispatch}=useData()

    useEffect(()=>{
        const emptyAnswer:Answer[]=[{questionId:"",optionId:""}]

        // setConfirmedAnswer("","",emptyAnswer,)
        dataDispatch({type:"SET_CONFIRMED_ANSWER",payload:emptyAnswer})
    },[])
    return(
        <>
            {
                quizOne.map(quiz=>(
                    <QuizThumbnail key={quiz.id} item={quiz}/>
                ))
            }
        </>
    )
}