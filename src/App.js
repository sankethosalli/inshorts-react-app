import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Leftside from "./components/Leftside";
import Main from "./components/Main";



function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
  

          <Route  path="/">
            
<Header/>
<Leftside/>            
            <Main />
          </Route>

        </Switch>
      </Router>
    
    
    </div>
  );
}

export default App;
