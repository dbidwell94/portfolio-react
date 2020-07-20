import React from "react";
import styled, { keyframes } from "styled-components";
import hero from "../../../assets/Devin3.jpg";
import { COLORS } from "../../constants";

export default function Hero({ navbarHeight }) {
  const imageSize = "25rem";

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - ${navbarHeight}rem);
    color: ${COLORS.secondary};
    .about-me {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0rem 10rem;
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
        transform: scale(1.125);
        filter: blur(4rem);
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, .375);
        }
      }
      .card {
        padding: 10rem;
        background: ${COLORS.primary};
        z-index: 1;
        border-radius: 1.5rem;
        box-shadow: 0.25rem 0.25rem 1rem 0rem black;
      }
      p {
        font-size: 1.75rem;
        margin-left: 2rem;
        max-width: 25rem;
        color: ${COLORS.color3};
      }
    }
  `;

  return (
    <Container>
      <section className="about-me">
        <div className="about-img" />
        <div className="card">
          <p>Full Stack Web Developer</p>
        </div>
      </section>
    </Container>
  );
}
