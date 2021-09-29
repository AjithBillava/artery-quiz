import { useData } from "../contexts/dataContext"
import { QuestionType } from "../types/quiz.type"


export const Instructions =({currentQuiz,quizTitle}:{currentQuiz:QuestionType[],quizTitle:string} ) =>{
    
    const {state:{showInstructions},setShowInstructions}= useData()

    const noOfQuestions = currentQuiz.length
    const minimumScore = Math.floor(0.35*noOfQuestions*10)
    return(
        showInstructions?<div className="flex flex-col items-center w-screen absolute justify-center bottom-0 left-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm h-screen">
            <div className="flex items-center mx-5 md:mx-40 flex-col shadow-inner bg-white border-grey border-2 rounded  p-6 relative">
                <p className="flex justify-center text-3xl md:text-4xl">{quizTitle}</p>
                <p className="text-gray-500 text-2xl m-2">Instructions</p>
                <ol className=" bg-gray-200 p-2 text-lg md:text-xl rounded list-disc m-2">
                    <li className="leading-relaxed">There are total {noOfQuestions} questions in this quiz </li>
                    <li className="leading-relaxed">Each question will carry 10 points for correct answer and 2 points will be deducted for incorrect answer </li>
                    <li className="leading-relaxed">You need minimum {minimumScore} to pass the quiz </li>
                </ol>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded-full absolute top-0 right-0  m-2 hover:shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={()=>setShowInstructions(false)}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            
        </div>
        :
        <div></div>
        
    )
}