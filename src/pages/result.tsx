import { useData } from "../contexts/dataContext"

export const Result = () =>{
    const {state:{currentQuiz,confirmedAnswer}} = useData()
    

    return(
        <div>
            {
                currentQuiz.map(item=>{
                    const userAnswer = confirmedAnswer.filter(el=>el.questionId===item.id)
                    console.log(userAnswer)
                    return(
                        <div key={item.id}>
                            {
                                item.question
                            }
                            
                            {
                                item.options.map((option)=>{
                                    if(option.isRight){
                                       return <button className="bg-green">{option.text}</button>
                                    }
                                    else if(userAnswer[0]?.optionId===option.id && !option.isRight){
                                       return <button className="bg-red">{option.text}</button>
                                    }
                                    else {
                                       return <button className="bg-grey">{option.text}</button>
                                    }
                                }
                                // (
                                    
                                    // <button  >
                                    // {/* <button className={
                                    //     `
                                    //     ${option.isRight?`bg-green`:`bg-grey`}
                                    //     ${userAnswer[0]?.optionId===option.id && !option.isRight?`bg-red`:null}`
                                    // }> */}
                                    // {/* <button style={{
                                    //     backgroundColor:`${option.isRight?`greenyellow`:`transparent`}
                                    //     ${userAnswer[0]?.optionId===option.id&&!option.isRight?`red`:null}`}
                                    // }> */}
                                    //     {option.text}
                                    // </button>
                                    
                                // )
                                )
                            }
                        </div>
                    )
                }
                    
                )
            }
        </div>
    )
}