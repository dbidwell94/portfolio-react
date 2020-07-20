import React from "react";
import styled from "styled-components";
import hero from "../../../assets/hero.jpeg";
import { COLORS } from "../../constants";

export default function Hero({ navbarHeight }) {
  const imageSize = "25rem;";

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - ${navbarHeight}rem);
    background: ${COLORS.primary};
    color: ${COLORS.secondary};
    .about-me {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding: 0rem 10rem;
      img.profile-pic {
        width: ${imageSize};
        height: ${imageSize};
        border-radius: 50%;
        filter: drop-shadow(0rem 0rem 1rem ${COLORS.seconday});
      }
      p {
        font-size: 1.75rem;
        margin-left: 2rem;
        max-width: 25rem;
        color: ${COLORS.primary};
      }
    }
  `;

  return (
    <Container>
      <section className="about-me">
        <img
          className="profile-pic"
          src={hero}
          alt="Headshot of Devin Bidwell"
        />
        <p>Hello!</p>
      </section>
    </Container>
  );
}
