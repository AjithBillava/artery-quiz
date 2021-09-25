export type OptionsType ={
    id:string
    text:string,
    isRight:boolean
}

export type QuestionType={
    id:string,
    question : string ,
    point:number,
    options : OptionsType[]
}

export type QuizType = {
    id: any,
    quizName: string,
    questions : QuestionType[]
}

export type Answer = {
    questionId: string;
    optionId: string;
};
export type QuizThumbnailType ={
    item:QuizType
}