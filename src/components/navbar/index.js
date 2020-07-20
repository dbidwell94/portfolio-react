import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { COLORS, BREAKPOINTS } from "../constants";
import { Link } from "react-router-dom";

export default function Navbar({ height, setHeight }) {
  const Container = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    @media (orientation: landscape) and (max-width: ${BREAKPOINTS.phablet}){
      position: unset;
    }
    top: 0;
    width: 100%;
    height: ${height ? height : 8}rem;
    padding: 0rem 2rem;
    background: ${COLORS.color3};
    box-shadow: 0rem 0.25rem 1rem 0rem ${COLORS.primary};
    @media (max-width: ${BREAKPOINTS.phablet}) {
      justify-content: flex-start;
      flex-direction: column;
    }
    .title {
      display: flex;
      align-items: center;
      @media (max-width: ${BREAKPOINTS.phablet}) {
        align-self: flex-start;
        justify-self: center;
        align-items: center;
        height: 100%;
        width: 100%;
        justify-content: space-between;
      }
      a {
        text-decoration: none;
        color: ${COLORS.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        h1 {
          font-size: 5rem;
          font-family: "Roboto Slab", serif;
          @media (max-width: ${BREAKPOINTS.phablet}){
            font-size:3.5rem;
          }
        }
      }
      .hamburger {
        display: none;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: ${height / 2}rem;
        width: ${height / 2}rem;
        position: relative;
        @media (max-width: ${BREAKPOINTS.phablet}) {
          display: flex;
        }
        .line1,
        .line3 {
          transition: 0.25s ease-in-out all;
          width: 80%;
          position: absolute;
          top: 75%;
          content: "";
          border: thin solid black;
          &.opened {
            transition: 0.25s ease-in-out all;
            transform: rotate(45deg);
            top: 50%;
            width: 100%;
          }
        }
        .line1 {
          top: 25%;
          &.opened {
            transform: rotate(-45deg);
            top: 50%;
            width: 100%;
          }
        }
        .line2 {
          transition: 0.25s ease-in-out all;
          position: absolute;
          width: 80%;
          top: 50%;
          content: "";
          border: thin solid black;
          &.opened {
            opacity: 0;
            transition: 0.25s ease-in-out all;
          }
        }
      }
    }
    .links-container {
      display: flex;
      flex-direction: row;
      @media (max-width: ${BREAKPOINTS.phablet}) {
        flex-direction: column;
        display: none;
      }
    }
    .nav-link {
      text-decoration: none;
      margin-left: 2rem;
      font-size: 2.5rem;
      font-family: 'Oxygen', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      color: ${COLORS.primary};
      box-shadow: 0.125rem 0.125rem 0.25rem 0rem ${COLORS.primary};
      padding: 0.5rem ${(16 / 9) * 0.5}rem;
      border-radius: 0.5rem;
      transform: scale(1);
      transition: 0.125s ease-in-out all;
      &:hover {
        transform: scale(1.125);
        box-shadow: 0.75rem 0.75rem 1rem 0rem ${COLORS.primary};
        cursor: pointer;
      }
    }
  `;
  return (
    <Container>
      <div className="title">
        <Link to="/">
          <h1>Devin Bidwell</h1>
        </Link>
        <div
          className="hamburger nav-link"
          onClick={(e) => {
            [].slice.call(e.target.children).forEach((child) => {
              if (child) {
                child.classList.toggle("opened");
              }
            });
          }}
        >
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </div>
      <div className="links-container">
        <a className="nav-link" href="#about">
          About
        </a>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </Container>
  );
}
