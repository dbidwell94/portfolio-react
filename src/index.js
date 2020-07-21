import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import NotFound from './components/notFound';
import Home from "./components/home";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(8);
  return (
    <Router>
      <Navbar height={navbarHeight} setHeight={setNavbarHeight} />
      <Switch>
        <Route path="/" exact>
          <Home navbarHeight={navbarHeight} />
        </Route>
        <Route>
          <NotFound navbarHeight={navbarHeight} />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
