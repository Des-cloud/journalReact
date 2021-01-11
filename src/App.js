import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Compose from "./components/compose";
import Contact from "./components/contact";
import Error from "./components/error";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/compose">
            <Compose />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          {/* <Route path="/person/:id" children={<Person />}></Route> */}
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
