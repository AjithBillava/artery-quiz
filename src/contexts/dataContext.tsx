import  React, { createContext, useContext, useReducer } from "react";
import { ACTONTYPE, initialState, initialStateType, reducer } from "../reducer/dataReducer";
import { Answer, QuestionType } from "../types/quiz.type";

export type ContextValuesType = {
	state: initialStateType,
    checkAnswer: (optionID:Answer | undefined) =>any,
    nextQuestion:(arrayIndex:number,quizLength:number) =>any,
    prevQuestion:(arrayIndex:number,quizLength:number) =>any,
    setScore : (confirmedAnswer:Answer[],currentQuiz:QuestionType[])=>any,
    setConfirmedAnswer:(questionId:string,optionId:string,confirmedAnswer:Answer[],question:QuestionType) =>any,
	setQuizDetails:(quizQuestions:QuestionType[],quizTitle:string)=>any,
	dataDispatch:  React.Dispatch<ACTONTYPE>;
    setShowInstructions : (showInstruction:boolean) =>any
};

export const DataContext = createContext<ContextValuesType> ({} as ContextValuesType )

export const DataProvider:React.FC =({children})=>{
    const [state,dataDispatch] = useReducer(reducer,initialState)

    const checkAnswer = (option:Answer|undefined)=>{
        dataDispatch({type:"SET_SELECTED_ANSWER",payload:option?option.optionId:""})
    }

    const setScore = (confirmedAnswer:Answer[],currentQuiz:QuestionType[])=>{
        let sum = 0;
        let noCorrect = 0;
    currentQuiz.forEach((item) => {
        const answer = confirmedAnswer.filter(
          (answerItem) => answerItem.questionId === item.id
        );
        const options = item.options.filter(el=>el.isRight===true)
        console.log(options)
        if (answer.length > 0) {
          if (answer[0].optionId === options[0].id) {
            sum += 10;
            noCorrect +=1;
          } else {
            sum -= 2;
          }
        }
      
        dataDispatch({type:"SET_SCORE",payload:sum})
        dataDispatch({type:"SET_NO_CORRECT_ANSWER",payload:noCorrect})
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
    const setQuizDetails=(quizQuestions:QuestionType[],quizTitle:string)=>{
        dataDispatch({type:"SET_CURRENT_QUIZ",payload:quizQuestions})
        dataDispatch({type:"SET_QUIZ_TITLE",payload:quizTitle})
    }
    const setShowInstructions = (showInstruction:boolean) =>{
        dataDispatch({type:"SET_SHOW_INSRTUCTIONS",payload:showInstruction})
    }
    return(
        <DataContext.Provider value={{
            state,
            setScore,
            checkAnswer,
            nextQuestion,
            prevQuestion,
            setConfirmedAnswer,
            setQuizDetails,
            setShowInstructions,
            dataDispatch
        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () =>(useContext(DataContext))