import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import hero from "../../../assets/Devin3.jpg";
import { COLORS, TECH, BREAKPOINTS } from "../../constants";

function TypeWriter({}) {
  const [keyFrameworkIndex, setKeyFrameworkIndex] = useState({
    key: 0,
    framework: 0,
  });

  const currentTech = TECH[Object.keys(TECH)[keyFrameworkIndex.key]];
  const frameworkNameLength =
    currentTech.frameworks[keyFrameworkIndex.framework].length;

  function setCurrentFramework() {
    setTimeout(() => {
      if (keyFrameworkIndex.framework + 1 > currentTech.frameworks.length - 1) {
        if (keyFrameworkIndex.key + 1 > Object.keys(TECH).length - 1) {
          setKeyFrameworkIndex({ key: 0, framework: 0 });
        } else {
          setKeyFrameworkIndex({
            key: keyFrameworkIndex.key + 1,
            framework: 0,
          });
        }
      } else {
        setKeyFrameworkIndex({
          key: keyFrameworkIndex.key,
          framework: keyFrameworkIndex.framework + 1,
        });
      }
    }, 1500);
  }

  const cursorAnimation = keyframes`
    from, to{
      border-right: .25rem solid black;
    }
    50%{
      border-right: .25rem solid transparent;
    }
  `;

  const typingAnimation = keyframes`
    from{
      width: 0%;
    }
    to{
      width: 100%;
    }
  `;

  const Writer = styled.div`
    padding-right: 0.1rem;
    color: ${COLORS.color3};
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    font-size: 1.25rem;
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      animation: ${typingAnimation} ${frameworkNameLength * 0.1}s
          steps(${frameworkNameLength}, end),
        ${cursorAnimation} 0.75s step-end infinite;
      margin: 0 auto;
      overflow: hidden;
      width: min-content;
      text-align: left;
    }
  `;

  return (
    <React.Fragment>
      <div className="writer-title">
        <h2>{currentTech.name}</h2>
      </div>
      <Writer>
        <p onAnimationEnd={(e) => setCurrentFramework()}>
          {currentTech.frameworks[keyFrameworkIndex.framework]}
        </p>
      </Writer>
    </React.Fragment>
  );
}

export default function Hero({ navbarHeight }) {
  const imageSize = "25rem";

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: calc(100vh - ${navbarHeight}rem);
    @media (orientation: landscape) and (max-width: ${BREAKPOINTS.phablet}) {
      height: 100vh;
    }
    color: ${COLORS.secondary};
    .writer-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: ${COLORS.color3};
      width: min-content;
      margin-top: 1.5rem;
    }
    .about-me {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0rem 10rem;
      word-wrap: break-word;
      @media (max-width: ${BREAKPOINTS.phablet}) {
        padding: 0rem 2.5rem;
      }
      @media (max-width: ${BREAKPOINTS.smallMobile}) {
        padding: 0;
      }
      overflow: hidden;
      height: 100%;
      position: relative;
      .about-img {
        position: absolute;
        background-image: url(${hero});
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        background-position-y: 25%;
        width: 100%;
        height: 100%;
        z-index: 0;
        top: 0rem;
        left: 0rem;
        filter: blur(4rem);
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.375);
        }
      }
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10rem;
        @media (max-width: ${BREAKPOINTS.phablet}) {
          padding: 5rem 1%;
        }
        background: ${COLORS.primary};
        z-index: 1;
        border-radius: 1.5rem;
        box-shadow: 0.25rem 0.25rem 1rem 0rem black;
        position: relative;
        p {
          font-size: 1.75rem;
          @media (max-width: ${BREAKPOINTS.phablet}) {
            margin: 0;
            width: 100%;
          }
          text-align: center;
          color: ${COLORS.color3};
        }
        .writer-container{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  `;

  return (
    <Container>
      <section className="about-me">
        <div className="about-img" />
        <div className="card">
          <p>Full Stack Web Developer with experience in...</p>
          <div className="writer-container">
            <TypeWriter />
          </div>
        </div>
      </section>
    </Container>
  );
}
