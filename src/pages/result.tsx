import { Redirect } from "react-router"
import { Link } from "react-router-dom"
import { useData } from "../contexts/dataContext"
import { Answer } from "../types/quiz.type"

export const Result = () =>{
    const {state:{currentQuiz,confirmedAnswer,noOfCorrect,score,quizTitle}} = useData()
    let correct :Answer[]=[]
    const attempted=confirmedAnswer.length;
    const totalQuestions=currentQuiz.length
    
    const btnStyle= "m-2 p-2 px-4 rounded flex justify-center shadow-inner relative"
    const totalScore = totalQuestions*10
    const scoreCondition = score>0.35*totalScore?" text-blue-400":" text-red-500"
    
    const scoreStyle="flex font bold justify-center text-5xl md:text-6xl"
    return(
        currentQuiz.length>0?
        <div className="my-4 flex flex-col text-xl md:text-2xl">
            <p className="flex justify-center font-bold text-3xl md:text-4xl">REVIEW</p>
                <div className="flex mt-2 flex-col shadow-inner flex-wrap border-grey border-2 rounded mx-4 md:mx-20 lg:mx-40 p-6" >
                    <p className="flex justify-center text-3xl md:text-4xl mb-4">{quizTitle}</p>
                    <div className="flex flex-col mb-2 items-center justify-center mx-4">
                        <p className={`${scoreStyle}${scoreCondition} `}> {score}</p>
                        <p  className="text-sm md:text-lg">POINTS</p>
                    </div>
                    <ul className="flex flex-col sm:flex-row justify-between mt-4 p-4 md:p-6 flex-wrap text-3xl md:text-4xl">
                        <li className="flex flex-col mb-2 items-center justify-center mx-4">
                            <div className="flex justify-center">{totalQuestions}</div> 
                            <div className="text-sm md:text-lg">QUESTIONS</div>
                        </li>
                        
                        {/* <li className="justify-center text-xl flex items-center">
                            of
                        </li> */}
                        <li className="flex flex-col mb-2 items-center justify-center mx-4">
                            <div className="flex justify-center">{attempted}</div>
                            <div className="text-sm md:text-lg">ATTEMPTED</div>
                        </li>
                        {/* <li className="justify-center text-xl flex items-center">
                            with
                        </li> */}
                        <li className="flex flex-col mb-2 items-center  justify-center mx-4">
                            <div className="flex justify-center">{noOfCorrect}</div>
                            <div className="text-sm md:text-lg">CORRECT</div>
                        </li>
                        {/* <li className="justify-center text-xl flex items-center">
                            and
                        </li> */}
                        <li className="flex flex-col mb-2 items-center  justify-center mx-4">
                            <div className="flex justify-center">{attempted-noOfCorrect}</div>
                            <div className="text-sm md:text-lg">WRONG</div>
                        </li>
                    </ul>
                </div>
                <div className="flex mt-6 md:mt-8 shadow-inner justify-center flex-col border-grey border-2 rounded mx-4 xsm:mx-10 md:mx-40 lg:mx-80 p-6">
                
                {
                    currentQuiz.map(item=>{
                        const userAnswer = confirmedAnswer.filter(el=>el.questionId===item.id)
                        
                        userAnswer.forEach(el=>correct=[...correct,el])
                      
                        
                        return(
                            <div key={item.id}
                            className="flex flex-col mb-8" >
                                <p className="flex justify-center font-bold mt-4">
                                    {item.question}
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
            <div className="flex justify-center">
                <Link to="/" className={`${btnStyle} mb-5 bg-primaryColor hover:bg-primaryColor-dark`}>
                    End Review
                </Link>
            </div>
        </div>
        :
        <Redirect to="/"/>
    )
}