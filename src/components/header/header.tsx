import { useEffect } from "react"
import { useData } from "../../contexts/dataContext"
import {headerProps} from "./header.props"
export const Header = ({username,score}:headerProps) =>{
    const {state:{currentQuiz,confirmedAnswer},setScore}=useData()

    useEffect(()=>{
        setScore(confirmedAnswer,currentQuiz)
    },[confirmedAnswer,currentQuiz])
    return(
        <>
            <h1>QUIZ</h1>
            <div style={{"fontSize":"1.3rem"}}>
                <p>username:{username}</p>
                <p>score:{score}</p>
            </div>
        </>
    )
}