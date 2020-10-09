import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import Home from "./components/home";
import Projects from "./components/projects";
import Contact from './components/contact';
import axios from "axios";
import { URLS } from "./components/constants";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(8);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get(URLS.github.repoUrl).then((res) => {
      setRepos(res.data);
    });
  }, []);

  return (
    <Router>
      <Navbar height={navbarHeight} setHeight={setNavbarHeight} />
      <Switch>
        <Route path="/" exact>
          <Home navbarHeight={navbarHeight} />
        </Route>
        <Route path="/projects">
          <Projects navbarHeight={navbarHeight} repos={repos} />
        </Route>
        <Route path="/contact">
          <Contact navbarHeight={navbarHeight}/>
        </Route>
        <Route>
          <NotFound navbarHeight={navbarHeight} />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
