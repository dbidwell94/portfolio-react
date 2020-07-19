import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(8);
  return (
    <Router>
      <Navbar height={navbarHeight} setHeight={setNavbarHeight} />
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
