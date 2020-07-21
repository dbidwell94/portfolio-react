import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NotFound({ navbarHeight }) {
  const Container = styled.section`
    margin-top: ${navbarHeight}rem;
    height: calc(100vh - ${navbarHeight}rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    div.card{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10rem;
      background: white;
      h2{
        font-size: 2rem;
      }
      p{
        font-size: 1.5rem;
      }
      a{
        text-decoration: none;
        margin-top: 2rem;
        font-size: 1.25rem;
        color: white;
        padding: ${`1.5rem ${1.5 * 16/9}rem`};
        background: black;
        border-radius: .75rem;
      }
    }
  `;

  return (
    <Container>
      <div className="card">
        <h2>404 Oops!</h2>
        <p>The page you are looking for is not found!</p>
        <Link to="/">Take me home!</Link>
      </div>
    </Container>
  );
}
