import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Theme from "./components/Theme";
import Back from "./components/Back";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  const [darkMode, setOn] = React.useState(true)
 
  


  const styles = {
    backgroundColor: darkMode ? "#000000" : "#FFFFFF",
   color: darkMode ? "#FFFFFF" : "#000000"

}
function toggleoff(){
  setOn(prevOn => !prevOn)
  
}

function toggle() {
  setOn(prevOn => !prevOn)
}
  return (
    <Router>
      <div >
      <div style={styles} className="App md:px-0 px-1 ">
      
        <Header style={styles} />
        <Switch>
          <Route exact path="/">
            <Theme style={styles} toggleoff={toggleoff} toggle={toggle} />
          </Route>
          <Route exact path="/Back">

            <Back  />
          </Route>
        </Switch>

        <Footer />
      </div>
      </div>
    </Router>
  );
}

export default App;
