import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import './App.css';
import { Header } from "./components/header/header";
import { useData } from "./contexts/dataContext";
import { Home } from "./pages/Home";
import { QuestionPage } from "./pages/QuestionPage";
import { Result } from "./pages/result";

function App() {
  const {state:{score}}=useData()

  return (
    <div className="App">
      <Router>
      <Header score={score} username={"Ajith"} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quiz/:quizID" exact component={QuestionPage} />
          <Route path="/result" exact component={Result} />
        </Switch>
          
      </Router>
    
    </div>
  );
}

export default App;
