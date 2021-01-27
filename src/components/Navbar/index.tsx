import React from "react";
import translate from "client-tools/translate";
import styled from "styled-components";
import StyledNavLink, { IStyledLinkProps } from "components/shared/StyledLink";
import { useSelector } from "src/state";

interface INavbarTheme {
  navbarHeight: number;
}

const Container = styled.nav<INavbarTheme>`
  display: flex;
  height: ${(props) => props.navbarHeight}rem;
  background: black;
  color: whitesmoke;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;
  div.links {
    display: flex;
    flex-direction: row;
    div {
      margin: 0rem 0.5rem;
    }
  }
`;

const generalLinkTheme: Omit<IStyledLinkProps, "to"> = {
  backgroundColor: "whitesmoke",
  textColor: "black",
  padding: 0.375,
};

const ctaLinkTheme: Omit<IStyledLinkProps, "to"> = {
  backgroundColor: "gold",
  textColor: "black",
  padding: 0.375,
};

export default function Navbar() {
  const { navbarHeight } = useSelector((state) => state.themeReducer);

  return (
    <Container navbarHeight={navbarHeight}>
      <div className="title">
        <h1>Devin Bidwell</h1>
      </div>
      <div className="links">
        <StyledNavLink to="/about" {...generalLinkTheme}>
          {translate.get("navbar.about")}
        </StyledNavLink>
        <StyledNavLink to="/projects" {...generalLinkTheme}>
          {translate.get("navbar.Projects")}
        </StyledNavLink>
        <StyledNavLink to="/contact" {...ctaLinkTheme}>
          {translate.get("navbar.Contact")}
        </StyledNavLink>
      </div>
    </Container>
  );
}
