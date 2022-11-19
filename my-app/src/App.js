import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Theme from "./components/Theme";
import Back from "./components/Back";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App ">
        <Header />
        <Switch>
          <Route exact path="/">
            <Theme />
          </Route>
          <Route exact path="/Back">

            <Back />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
