import { Link } from "react-router-dom"
import {headerProps} from "./header.props"
export const Header = ({firstname,lastname,score}:headerProps) =>{

    // useEffect(()=>{
    //     setScore(confirmedAnswer,currentQuiz)
    // },[confirmedAnswer,currentQuiz])
    return(
        <>
            <nav className="flex flex-wrap  justify-around items-center w-full p-2 bg-black text-white border-primaryColor border-b-8">
                    
                <Link to="/" className="text-3xl md:text-4xl flex content-center rounded p-2 hover:bg-primaryColor-dark hover:text-black">Artery-Quiz</Link>
                {/* <div className="flex flex-wrap justify-between content-center">
                    <p>username:{username}</p>
                    <p>score:{score}</p>
                </div> */}
                    {/* <p>score:{score}</p> */}
                <p className="bg-primaryColor-light text-lg md:text-xl text-black rounded-full h-10 w-10 flex items-center justify-center">{firstname.charAt(0).toUpperCase()}{lastname.charAt(0).toUpperCase()}</p>
            </nav>
        </>
    )
}