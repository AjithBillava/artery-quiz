import { useEffect } from "react"
import { useData } from "../../contexts/dataContext"
import { quizOne } from "../../data/quiz.data"
import {Answer} from "../../types/quiz.type"
import { QuizThumbnail } from "../quizThumbnail/quizThumbnail"

export const Quiz =() =>{ 
    const{dataDispatch,setShowInstructions}=useData()

    useEffect(()=>{
        const emptyAnswer:Answer[]=[]
        dataDispatch({type:"SET_CONFIRMED_ANSWER",payload:emptyAnswer})
        dataDispatch({type:"SET_SCORE",payload:0})
        setShowInstructions(true)
    },[])
    return(
        <div className="flex justify-around mt-8">
            {
                quizOne.map(quiz=>(
                    <QuizThumbnail key={quiz.id} item={quiz}/>
                ))
            }
        </div>
    )
}