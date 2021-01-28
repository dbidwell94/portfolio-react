import React from "react";
import translate from "client-tools/translate";
import styled from "components/shared/globalTheme";
import StyledNavLink, { StyledCta } from "components/shared/StyledLink";
import { useSelector } from "src/state";

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
  filter: drop-shadow(0rem 0.25rem 0.5rem grey);
  div.links {
    display: flex;
    flex-direction: row;
  }
`;

export default function Navbar() {
  const { navbarHeight } = useSelector((state) => state.themeReducer);

  return (
    <Container navbarHeight={navbarHeight}>
      <div className="title">
        <h1>Devin Bidwell</h1>
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
