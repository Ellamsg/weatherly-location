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
    backgroundColor: darkMode ? "#FFFFFF" : "#000000",
   color: darkMode ? "#000000" : "#FFFFFF"

}
function toggleoff(){
  setOn(prevOn => !prevOn)
  
}

function toggle() {
  setOn(prevOn => !prevOn)
}
  return (
    <Router>
      
      <div style={styles} className="App md:px-0 px-1 ">
      
        <Header style={styles} />
        <Switch>
          <Route exact path="/">
            <Theme toggleoff={toggleoff} toggle={toggle} />
          </Route>
          <Route exact path="/Back">

            <Back  />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
