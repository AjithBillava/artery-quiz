import { Link } from "react-router-dom";
import { useData } from "../../contexts/dataContext";
import { QuizThumbnailType } from "../../types/quiz.type";

export function QuizThumbnail({item}:QuizThumbnailType) {
    const{dataDispatch} = useData()
    // console.log(item)
    return(
        <Link to={`/quiz/${item.id}`} onClick={()=>dataDispatch({type:"SET_CURRENT_QUIZ",payload:item.questions})} >
            {item.quizName}
        </Link>
    )
}