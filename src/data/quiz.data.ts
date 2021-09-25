import { QuizType } from "../types/quiz.type";
import { v4 } from 'uuid'

export const quizOne : QuizType[]= [
    {
        id:v4(),
        quizName:"THE IPL QUIZ",
        questions:[
            {
                id:v4(),
                question:"Who won the first IPL cup",
                point:5,
                options:[
                    {
                        id:v4(),
                        text:"RCB",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"KKR",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"RR",
                        isRight:true
                    }
                ]
            },
            {
                id:v4(),
                question:"Who highest no of runs in sigle season of IPL",
                point:5,
                options:[
                    {
                        id:v4(),
                        text:"Gayle",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Warner",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Virat",
                        isRight:true
                    }
                ]
            }
        ]
    },
    {
        id:v4(),
        quizName:"THE IPL QUIZ 2",
        questions:[
            {
                id:v4(),
                question:"Who won the first IPL cups",
                point:5,
                options:[
                    {
                        id:v4(),
                        text:"RCB",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"KKR",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"RR",
                        isRight:true
                    }
                ]
            },
            {
                id:v4(),
                question:"Who highest no of runs in sigle season of IPL",
                point:5,
                options:[
                    {
                        id:v4(),
                        text:"Gayle",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Warner",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Virat",
                        isRight:true
                    }
                ]
            },
            {
                id:v4(),
                question:"Who highest no of runs in single season of IPL",
                point:5,
                options:[
                    {
                        id:v4(),
                        text:"Gayle",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Warner",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Virat",
                        isRight:true
                    }
                ]
            }
        ]
    }

]