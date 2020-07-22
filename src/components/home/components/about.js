import React from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../../constants";

export default function About({ navbarHeight }) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - ${navbarHeight}rem);
    width: 100%;
    background: black;
    background-image: linear-gradient(${COLORS.secondary}, ${COLORS.color3});
    @media (max-width: ${BREAKPOINTS.phablet}) {
      padding: 0rem 1rem;
      height: auto;
      min-height: 100vh;
    }
    .card {
      display: flex;
      flex-direction: row;
      margin: 25%;
      background: rgba(0, 0, 0, 0.75);
      color: white;
      padding: 10rem;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      box-shadow: 0.25rem 0.25rem 1rem 0rem black;
      @media (max-width: ${BREAKPOINTS.phablet}) {
        margin: 1rem 0rem;
        width: 100%;
        flex-direction: column;
        padding: 5rem 0rem;
      }
      div.paragraph {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
        width: 75%;
        @media (max-width: ${BREAKPOINTS.phablet}) {
          width: 90%;
          text-align: center;
        }
        p {
          font-size: 1.5rem;
          text-indent: 2rem;
        }
      }
      div.title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: flex-start;
        @media (max-width: ${BREAKPOINTS.phablet}) {
          align-self: unset;
        }
        h2 {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20rem;
          height: 20rem;
          border-radius: 50%;
        }
      }
    }
  `;

  return (
    <Container id="about">
      <section className="card">
        <div className="title">
          <h2>It's nice to meet you!</h2>
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Shaking hands"
          />
        </div>
        <div className="paragraph">
          <p>
            My name is Devin Bidwell, a full stack web developer. I started my
            deveopment jouney in High School when I started learning Java. Soon
            thereafter, I because intrigued with game development and started
            learning C# with the Unity game engine. I have released 2 full games
            with said engine, one of which is fully cross-platform on desktop
            and mobile platforms.
            <br />
            <br />
          </p>
          <p>
            After I had the fundamentals of programming down and understood
            them, I became intrigued with Web development. It was then that I
            realized that my passion is with designing and creating web
            applications that can run on any device
          </p>
        </div>
      </section>
    </Container>
  );
}
