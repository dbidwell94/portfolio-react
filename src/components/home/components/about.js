import React from "react";
import styled from "styled-components";

export default function About({navbarHeight}) {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - ${navbarHeight}rem);
    width: 100%;
    background: white;
  `

  return (
    <Container id='about'>
      <h1>Hello from about!</h1>
    </Container>
  )
}
