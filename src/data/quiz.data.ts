import { QuizType } from "../types/quiz.type";
import { v4 } from 'uuid'

export const quizOne : QuizType[]= [
    {
        id:v4(),
        quizName:"Art and Culture",
        questions:[
            {
                id:v4(),
                question:"The famous painter Vincent van Gogh belonged to which country?",
                options:[
                    {
                        id:v4(),
                        text:"Spain",
                        isRight:false        
                    },
                    {
                        id:v4(),
                        text:"The Netherlands",
                        isRight:true        
                    },
                    {
                        id:v4(),
                        text:"Italy",
                        isRight:false        
                    },
                    {
                        id:v4(),
                        text:"France",
                        isRight:false        
                    }
                ]
            },            
            {
                id:v4(),
                question:" Ikebana is Japanese art of :",
                options:[
                    {
                        id:v4(),
                        text:"paper craf",
                        isRight:false        
                    },
                    {
                        id:v4(),
                        text:"miniature tree farming",
                        isRight:false        
                    },
                    {
                        id:v4(),
                        text:"dress designing",
                        isRight:false        
                    },
                    {
                        id:v4(),
                        text:"flower arrangement",
                        isRight:true        
                    }
                ]
            },
            {
                id:v4(),
                question:" Pablo Picasso belonged to which country?",
                options:[
                    {
                        id:v4(),
                        text:"Spain",
                        isRight:true        
                    },
                    {
                        id:v4(),
                        text:"Germany",
                        isRight:false        
                    },
                    {
                        id:v4(),
                        text:"Italy",
                        isRight:false        
                    },
                    {
                        id:v4(),
                        text:"France",
                        isRight:false        
                    }
                ]
            },
            {
                id:v4(),
                question:"Who among the following is a distinguished actor as well as recipient of Jnanpith Award (the highest literary award in India)?",
                options:[
                    {
                        id:v4(),
                        text:"Javed Akthar",
                        isRight:false        
                    },
                    {
                        id:v4(),
                        text:"Girish Karnad",
                        isRight:true        
                    },
                    {
                        id:v4(),
                        text:"Vijay Tendulkar",
                        isRight:false        
                    },
                    {
                        id:v4(),
                        text:"Kaifi Azmi",
                        isRight:false        
                    }
                ]
            },
            {
                id:v4(),
                question:"Madhubani’ a style of folk paintings, is popular in which of the following states in India",
                options:[
                    {
                        id:v4(),
                        text:"Bihar",
                        isRight:true        
                    },
                    {
                        id:v4(),
                        text:"West Bengal",
                        isRight:false        
                    },
                    {
                        id:v4(),
                        text:"Madhya Pradesh",
                        isRight:false        
                    },
                    {
                        id:v4(),
                        text:"Rajasthan",
                        isRight:false        
                    }
                ]
            },
            {
                id:v4(),
                question:"Warli painting is indigenous to which State?",
                options:[
                    {
                        id:v4(),
                        text:"Gujrat",
                        isRight:false        
                    },
                    {
                        id:v4(),
                        text:"West Bengal",
                        isRight:false        
                    },
                    {
                        id:v4(),
                        text:"Maharshtra",
                        isRight:true        
                    },
                    {
                        id:v4(),
                        text:"Rajasthan",
                        isRight:false        
                    }
                ]
            },
        ]
    },
    {
        id:v4(),
        quizName:"Indian History",
        questions:[
            {
                id:v4(),
                question:" The Mathura school of art flourished during the reign of ",
                options:[
                    {
                        id:v4(),
                        text:"Kanishka",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Kadphises-1",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Kushanas",
                        isRight:true
                    },
                    {
                        id:v4(),
                        text:"Vasudeva",
                        isRight:false
                    },
                ]
            },
            {
                id:v4(),
                question:" Which one of the following travelers visited India during the Gupta period?",
                options:[
                    {
                        id:v4(),
                        text:"Hiuen-Tsang",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Fa- Hien",
                        isRight:true
                    },
                    {
                        id:v4(),
                        text:"Marco Polo",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Nicolo Conti",
                        isRight:false
                    },
                ]
            },
            {
                id:v4(),
                question:" Hathigumpha inscription is attributed to which of the following emperors? ",
                options:[
                    {
                        id:v4(),
                        text:"Ashoka",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Chandragupta II",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Samudragupta",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Kharavela",
                        isRight:true
                    },
                ]
            },
            {
                id:v4(),
                question:" The Ajanta painting belongs to the ",
                options:[
                    {
                        id:v4(),
                        text:"Buddhist period",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Gupta period",
                        isRight:true
                    },
                    {
                        id:v4(),
                        text:"Harappan period",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Mauryan period",
                        isRight:false
                    },
                ]
            },
            {
                id:v4(),
                question:" Who of the following was a contemporary of Alexander the Great? ",
                options:[
                    {
                        id:v4(),
                        text:"Ashoka",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Bimbisara",
                        isRight:false
                    },
                    {
                        id:v4(),
                        text:"Chandragupta Maurya",
                        isRight:true
                    },
                    {
                        id:v4(),
                        text:"Pushyamitra Sunga",
                        isRight:false
                    },
                ]
            },
        ]
    }

]