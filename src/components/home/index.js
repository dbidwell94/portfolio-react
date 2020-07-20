import React from "react";
import styled from "styled-components";
import About from "./components/about";
import Hero from "./components/hero";

export default function Home({ navbarHeight }) {
  const Container = styled.div`
    margin-top: ${navbarHeight}rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 2rem;
    }
  `;

  return (
    <Container>
      <Hero navbarHeight={navbarHeight} />
    </Container>
  );
}
