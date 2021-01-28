import React from "react";
import styled from "styled-components";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "components/Navbar";
import Hero from "sections/homePage/Hero";
import NotFound from "sections/notFound";
import Footer from 'components/Footer';
import translate from "client-tools/translate";

const Container = styled.div`
  z-index: -2;
`;

document.title = translate.get("document.title");

export default function App() {
  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Hero />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}
