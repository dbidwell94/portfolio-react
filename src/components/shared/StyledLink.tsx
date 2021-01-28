import { NavLink } from "react-router-dom";
import styled from "components/shared/globalTheme";

const StyledLink = styled(NavLink)`
  transition: 0.0625s ease-in-out all;
  background: none;
  padding: ${({ theme }) =>
    `${theme.link.padding.y}rem ${theme.link.padding.x}rem`};
  border-radius: 0.25rem;
  margin: ${({ theme }) =>
    `${theme.link.margin.y}rem ${theme.link.margin.x}rem`};
  border: thin solid ${({ theme }) => theme.link.background};
  text-decoration: none;
  color: ${({ theme }) => theme.link.background};
  &:hover {
    background: white;
    border: thin solid white;
    color: ${({ theme }) => theme.link.textColor};
  }
`;

export const StyledCta = styled(StyledLink)`
  border: thin solid goldenrod;
  background: none;
  color: white;
  &:hover {
    border: thin solid gold;
    background: gold;
    color: black;
  }
`;

export default StyledLink;
