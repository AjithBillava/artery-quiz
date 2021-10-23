import { Link } from "react-router-dom";
import { useData } from "../../contexts/dataContext";
import { QuizThumbnailType } from "../../types/quiz.type";

export function QuizThumbnail({item}:QuizThumbnailType) {
    const{setQuizDetails} = useData()
    // console.log(item)
    return(
        <Link to={`/quiz/${item.id}`} 
        className="p-2 border-2 flex flex-col mx-4 items-center justify-between border-grey rounded hover:shadow-md"
        onClick={()=>setQuizDetails(item.questions,item.quizName)} >
            <img className="flex w-60 h-40 md:w-80 md:h-52 justify-around items-center" src={`${item.imageURL}`} alt={`${item.quizName}`} />
            <p className="pt-2 text-lg md:text-2xl">{item.quizName}</p>
        </Link>
    )
}