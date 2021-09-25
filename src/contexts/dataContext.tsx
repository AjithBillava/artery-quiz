import  React, { createContext, useContext, useReducer } from "react";
import { ACTONTYPE, initialState, initialStateType, reducer } from "../reducer/dataReducer";
import { Answer, QuestionType } from "../types/quiz.type";

// export type checkAnswerType = {
//     option:OptionsType,arrayIndex:number,score:number
// }
export type ContextValuesType = {
	state: initialStateType,
    checkAnswer: (optionID:Answer | undefined) =>any,
    // checkAnswer: (option:OptionsType) =>any,
    nextQuestion:(arrayIndex:number,quizLength:number) =>any,
    prevQuestion:(arrayIndex:number,quizLength:number) =>any,
    setScore : (confirmedAnswer:Answer[],currentQuiz:QuestionType[])=>any,
    setConfirmedAnswer:(questionId:string,optionId:string,confirmedAnswer:Answer[],question:QuestionType) =>any
	// dataDispatch: ({type,payload}:{type:string,payload:any}) => React.Dispatch<any>;
	dataDispatch:  React.Dispatch<ACTONTYPE>;

};

export const DataContext = createContext<ContextValuesType> ({} as ContextValuesType )

export const DataProvider:React.FC =({children})=>{
    const [state,dataDispatch] = useReducer(reducer,initialState)

    const checkAnswer = (option:Answer|undefined)=>{
        dataDispatch({type:"SET_SELECTED_ANSWER",payload:option?option.optionId:""})
    }

    const setScore = (confirmedAnswer:Answer[],currentQuiz:QuestionType[])=>{
        let sum = 0;
    currentQuiz.forEach((item) => {
        const answer = confirmedAnswer.filter(
          (answerItem) => answerItem.questionId === item.id
        );
        const options = item.options.filter(el=>el.isRight===true)
        if (answer.length > 0) {
        //   let optionId = getCorrectOption(item);
          if (answer[0].optionId === options[0].id) {
            sum += 10;
            
          } else {
            sum -= 5;
          }
        }
      console.log(sum)
        dataDispatch({type:"SET_SCORE",payload:sum})
      });
    }

    const nextQuestion = (arrayIndex:number,quizLength:number) =>{
        if(arrayIndex<quizLength){
            dataDispatch({type:"INCREMENT_QUESTION",payload:arrayIndex})
           
        }
        else{
            dataDispatch({type:"INCREMENT_QUESTION",payload:quizLength-1})
        }
    }
    const prevQuestion = (arrayIndex:number,quizLength:number) =>{
        if(arrayIndex<quizLength){
            dataDispatch({type:"DECREMENT_QUESTION",payload:arrayIndex})
        }
        else{
            dataDispatch({type:"DECREMENT_QUESTION",payload:quizLength-1})
        }
    }

    const setConfirmedAnswer= (questionId:string,optionId:string,confirmedAnswer:Answer[],question:QuestionType) =>{
        let newAnswerArray = confirmedAnswer.filter(item=>item.questionId!==question.id)
        newAnswerArray= [ ...newAnswerArray,{questionId,optionId}]
        dataDispatch({type:"SET_CONFIRMED_ANSWER",payload:newAnswerArray})
        
    }
    
    return(
        <DataContext.Provider value={{
            state,
            setScore,
            checkAnswer,
            nextQuestion,
            prevQuestion,
            setConfirmedAnswer,
            dataDispatch
        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () =>(useContext(DataContext))