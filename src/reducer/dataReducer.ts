// import { questionProps } from "../components/question/question.prop"
import { Answer, QuestionType } from "../types/quiz.type"

export const initialState:initialStateType = {
    currentQuiz:[],
    score:0,
    arrayIndex:0,
    status:"starting" as statusState,
    selectedAnswer: "",
    // selectedAnswer: {questionId:"",optionId:""},
    // selectedAnswer: {text:"",isRight:false,id:""},
    confirmedAnswer:[]
}
export type statusState= "starting" | "playing" | "completed"

export type initialStateType = {
    currentQuiz:QuestionType[],
    score:number,
    arrayIndex:number,
    status:statusState,
    selectedAnswer: string ,
    // selectedAnswer: Answer | undefined,
    // selectedAnswer: OptionsType,
    confirmedAnswer:Answer[]
}

export type ACTONTYPE = 
| {type:"INCREMENT_SCORE",payload:number}
| {type:"DECREMENT_SCORE",payload:number}
| {type:"SET_SCORE",payload:number}
| {type:"SET_ARRAY_INDEX",payload:number}
| {type:"INCREMENT_QUESTION",payload:number}
| {type:"DECREMENT_QUESTION",payload:number}
| {type:"CHANGE_STATUS",payload:statusState}
| {type:"SET_CURRENT_QUIZ",payload:QuestionType[]}
// | {type:"SET_SELECTED_ANSWER",payload:Answer | undefined}
| {type:"SET_SELECTED_ANSWER",payload:string }
// | {type:"SET_SELECTED_ANSWER",payload:OptionsType}
| {type:"SET_CONFIRMED_ANSWER",payload:Answer[]}

// | {type:"INCREMENT_QUESTION",payload:number}

export function reducer  (state: initialStateType,actions : ACTONTYPE) : initialStateType {
    switch(actions.type){
        case "INCREMENT_SCORE": return{
            ...state,score:actions.payload+1
        }
        case "DECREMENT_SCORE": return {
            ...state,score:actions.payload-1
        }
        case "SET_SCORE": return {
            ...state,score:actions.payload
        }
        case "INCREMENT_QUESTION":return{
            ...state,arrayIndex: actions.payload+1
        }
        case "DECREMENT_QUESTION":return{
            ...state,arrayIndex: actions.payload-1
        }
        case "CHANGE_STATUS":return{
            ...state,status:actions.payload
        }
        case "SET_ARRAY_INDEX":return{
            ...state,arrayIndex:actions.payload
        }
        case "SET_SELECTED_ANSWER":return{
            ...state,selectedAnswer:actions.payload
        }
        case "SET_CURRENT_QUIZ":{
            // console.log(actions.payload)
            return{
            ...state,
            currentQuiz:actions.payload,
            arrayIndex:0
        }}
        case "SET_CONFIRMED_ANSWER":{
            return{
                ...state,
                confirmedAnswer:actions.payload
            }
        }
        default:throw new Error()
    }
}