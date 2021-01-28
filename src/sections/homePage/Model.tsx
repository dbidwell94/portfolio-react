import React, { useState } from "react";
import styled, { breakpoints } from "components/shared/globalTheme";
import heroImg from "../../static/images/headshot.jpg";
import useTranslate from "client-tools/useTranslate";

const Container = styled.section`
  background: rgba(0, 0, 0, 0.25);
  padding: 2rem;
  width: 60rem;
  max-height: 90%;
  min-width: 35%;
  height: 60rem;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2rem;
  box-shadow: 0rem 0.5rem 1rem -0.25rem black;
  z-index: 3;
  color: whitesmoke;
  img {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: 0% 0%;
    margin-bottom: 2rem;
  }
`;

export default function () {

  const translate = useTranslate();

  return (
    <Container>
      <img src={heroImg} />
      <h2>{translate.get("hero.tag")}</h2>
    </Container>
  );
}
