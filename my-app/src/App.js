import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Theme from "./components/Theme";
import Back from "./components/Back";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  {
    /* Toggle function usestate*/
  }
  const [darkMode, setOn] = React.useState("#000000");
  const [colorMode, setcolor] = React.useState("#FFFFFF");

  {
    /* Toggle function styles logic */
  }
  const styles = {
    backgroundColor: darkMode ? darkMode:"#FFFFFF" ,
    color: colorMode ? colorMode:"#000000",
  };
  {
    /* Toggle function lightmode*/
  }
  function toggleoff() {
    const  newtheme = darkMode ? darkMode:"#FFFFFF" ;
    const  colortheme = colorMode ? colorMode:"#000000" ;
    setOn(!newtheme)
    setcolor(!colortheme)
    
  }

  function toggle() {
   const  newtheme = darkMode ? darkMode:"#000000" ;
   const  colortheme = colorMode ? colorMode:"#FFFFFF" ;
   setOn(newtheme)
   setcolor(colortheme)
   
  }
  {
    /* Toggle function darkmode */
  }
 

  {
    /* check theme.js, back.js for toggle style added properties and App.js*/
  }
  return (
    <Router>
      <div>
        <div style={styles} className="App md:px-0 px-1 ">
          <Header style={styles} />
          <Switch>
            <Route exact path="/">
              <Theme style={styles} toggleoff={toggleoff} toggle={toggle} />
            </Route>
            <Route exact path="/Back">
              <Back />
            </Route>
          </Switch>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
