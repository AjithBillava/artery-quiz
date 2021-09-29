import { Answer, QuestionType } from "../types/quiz.type"

export const initialState:initialStateType = {
    currentQuiz:[],
    score:0,
    arrayIndex:0,
    status:"starting" as statusState,
    selectedAnswer: "",
    quizTitle:"",
    confirmedAnswer:[],
    noOfCorrect:0,
    showInstructions:true
}
export type statusState= "starting" | "playing" | "completed"

export type initialStateType = {
    currentQuiz:QuestionType[],
    score:number,
    arrayIndex:number,
    status:statusState,
    selectedAnswer: string ,
    quizTitle:string,
    confirmedAnswer:Answer[],
    noOfCorrect:number,
    showInstructions:boolean
}
export type ACTONTYPE = 
| {type:"SET_QUIZ_TITLE",payload:string}
| {type:"SET_SCORE",payload:number}
| {type:"SET_ARRAY_INDEX",payload:number}
| {type:"INCREMENT_QUESTION",payload:number}
| {type:"DECREMENT_QUESTION",payload:number}
| {type:"SET_NO_CORRECT_ANSWER",payload:number}
| {type:"CHANGE_STATUS",payload:statusState}
| {type:"SET_CURRENT_QUIZ",payload:QuestionType[]}
| {type:"SET_SELECTED_ANSWER",payload:string }
| {type:"SET_SHOW_INSRTUCTIONS",payload:boolean }
| {type:"SET_CONFIRMED_ANSWER",payload:Answer[]}


export function reducer  (state: initialStateType,actions : ACTONTYPE) : initialStateType {
    switch(actions.type){
        
        case "SET_SCORE": return {
            ...state,score:actions.payload
        }
        case "SET_QUIZ_TITLE": return {
            ...state,quizTitle:actions.payload
        }
        case "INCREMENT_QUESTION":return{
            ...state,arrayIndex: actions.payload+1
        }
        case "DECREMENT_QUESTION":return{
            ...state,arrayIndex: actions.payload-1
        }
        case "SET_ARRAY_INDEX":return{
            ...state,arrayIndex:actions.payload
        }
        case "SET_SELECTED_ANSWER":return{
            ...state,selectedAnswer:actions.payload
        }
        case "SET_CURRENT_QUIZ":{
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
        case "SET_SHOW_INSRTUCTIONS":{
            return {
                ...state,
                showInstructions:actions.payload
            }
        }
        case "SET_NO_CORRECT_ANSWER":{
            return{
                ...state,noOfCorrect:actions.payload
            }
        }
        default:{
            return state;
        }
    }
}