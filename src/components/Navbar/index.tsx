import React from "react";
import useTranslate from "client-tools/useTranslate";
import styled from "components/shared/globalTheme";
import StyledNavLink, { StyledCta } from "components/shared/StyledLink";
import { useSelector } from "src/state";
import { NavLink } from "react-router-dom";

interface INavbarTheme {
  navbarHeight: number;
}

const Container = styled.nav<INavbarTheme>`
  z-index: 5;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  height: ${(props) => props.navbarHeight}rem;
  background: ${({ theme }) => theme.navbar.background};
  color: ${({ theme }) => theme.navbar.textColor};
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.global.boxShadow};
  div.links {
    display: flex;
    flex-direction: row;
  }
`;

const TitleLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.navbar.textColor};
`;

export default function Navbar() {
  const { navbarHeight } = useSelector((state) => state.themeReducer);
  const translate = useTranslate();

  return (
    <Container navbarHeight={navbarHeight}>
      <div className="title">
        <TitleLink to="/">
          <h1>Devin Bidwell</h1>
        </TitleLink>
      </div>
      <div className="links">
        <StyledNavLink to="/about">
          {translate.get("navbar.about")}
        </StyledNavLink>
        <StyledNavLink to="/projects">
          {translate.get("navbar.Projects")}
        </StyledNavLink>
        <StyledCta to="/contact">{translate.get("navbar.Contact")}</StyledCta>
      </div>
    </Container>
  );
}
