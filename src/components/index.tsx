import React from "react";
import styled from "styled-components";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "components/Navbar";
import Hero from "sections/homePage/Hero";
import NotFound from "sections/notFound";
import Footer from 'components/Footer';
import useTranslate from "client-tools/useTranslate";

const Container = styled.div`
  z-index: -2;
`;


export default function App() {

  const translate = useTranslate();
  document.title = translate.get("document.title");


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
