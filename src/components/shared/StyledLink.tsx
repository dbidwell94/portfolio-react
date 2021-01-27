import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

export type IStyledLinkProps = NavLinkProps & IContainerProps;

type IContainerProps = {
  backgroundColor?: string;
  textColor?: string;
  padding?: number;
};

const Container = styled.div<IContainerProps>`
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};

  padding: ${(props) => (props.padding ? props.padding : 0.125)}rem;
  border-radius: 0.25rem;
  a {
    text-decoration: none;
    color: ${(props) => (props.textColor ? props.textColor : "black")};
  }
`;

export default function (props: IStyledLinkProps) {
  const { backgroundColor, textColor, padding, ...navLinkProps } = props;

  return (
    <Container
      backgroundColor={backgroundColor}
      textColor={textColor}
      padding={padding}
    >
      <NavLink {...navLinkProps} />
    </Container>
  );
}
