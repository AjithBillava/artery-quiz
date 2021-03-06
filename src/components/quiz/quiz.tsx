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
        <div className="flex flex-col items-center justify-around my-4">
            <h2 className="flex justify-center mb-4 font-semibold text-2xl md:text-3xl" >Quizes</h2>
            <div className="flex flex-col items-center sm:flex-row justify-around">
                {
                    quizOne.map(quiz=>(
                        <QuizThumbnail key={quiz.id} item={quiz}/>
                    ))
                }
            </div>
        </div>
    )
}