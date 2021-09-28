import { useData } from "../contexts/dataContext"
import { Answer } from "../types/quiz.type"

export const Result = () =>{
    const {state:{currentQuiz,confirmedAnswer,noOfCorrect,score}} = useData()
    let correct :Answer[]=[]
    const attempted=confirmedAnswer.length;
    const totalQuestions=currentQuiz.length
    
    const btnStyle= "m-2 p-2 px-4 rounded flex justify-center shadow-inner relative"
    const totalScore = totalQuestions*10
    const scoreCondition = score>0.35*totalScore?" text-blue-400":" text-red-500"

    const scoreStyle="flex font bold justify-center text-5xl md:text-6xl"
    return(
        <div className=" text-xl md:text-2xl">
            <div className="flex mt-4 flex-col  flex-wrap border-grey border-2 rounded mx-4 md:mx-20 lg:mx-60 p-6" >
                <p className={`${scoreStyle}${scoreCondition} `}> {score}</p>
                <ul className="flex justify-between p-6 flex-wrap">
                    <li>attempted:{attempted}</li>
                    <li>total-questions:{totalQuestions}</li>
                    <li>correct:{noOfCorrect}</li>
                    <li>wrong:{attempted-noOfCorrect}</li>
                </ul>
            </div>
            <div className="flex mt-4 md:mt-8 justify-center flex-col border-grey border-2 rounded mx-4 xsm:mx-10 md:mx-40 lg:mx-80 p-6">
             
            {
                currentQuiz.map(item=>{
                    const userAnswer = confirmedAnswer.filter(el=>el.questionId===item.id)
                    console.log("confirmed "+confirmedAnswer)
                    
                    console.log(userAnswer)
                    userAnswer.forEach(el=>correct=[...correct,el])
                    
                    console.log("correct "+{correct})
                    
                    return(
                        <div key={item.id}
                        className="flex flex-col mb-8" >
                            <p className="flex justify-center font-bold mt-4">
                                {item.question}?
                            </p>
                            
                            {
                                item.options.map((option)=>{
                                    if(userAnswer[0]?.optionId===option.id && option.isRight){
                                        return <p className={`${btnStyle} bg-green`}>
                                                    {option.text} 
                                                    <span className="absolute inset-y-0 right-0 flex items-center mx-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </span> 
                                                </p>
                                     }
                                    else if(option.isRight){
                                       return <p className={`${btnStyle} bg-green`}>{option.text}</p>
                                    }
                                    else if(userAnswer[0]?.optionId===option.id && !option.isRight){
                                       return <p className={`${btnStyle} bg-red`}>{option.text}
                                       {option.text} 
                                       <span className="absolute inset-y-0 right-0 flex items-center mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                       </span> 
                                   </p>
                                    }
                                    else {
                                       return <p className={`${btnStyle} bg-gray-100`}>{option.text}</p>
                                    }
                                }
                                )
                            }
                        </div>
                    )
                }
                    
                )
            }
        </div>
        </div>
    )
}