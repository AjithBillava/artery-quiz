import { Link } from "react-router-dom";
import { useData } from "../../contexts/dataContext";
import { QuizThumbnailType } from "../../types/quiz.type";

export function QuizThumbnail({item}:QuizThumbnailType) {
    const{setQuizDetails} = useData()
    // console.log(item)
    return(
        <Link to={`/quiz/${item.id}`} 
        className="p-2 border-2 border-grey rounded hover:shadow-md"
        onClick={()=>setQuizDetails(item.questions,item.quizName)} >
            {item.quizName}
        </Link>
    )
}