import React from "react";
import styled from "styled-components";
import { useSelector } from "src/state";

type IFillPageViewProps = Omit<IContainerProps, "navbarHeight"> & {
  children?: React.ReactNode;
};

interface IContainerProps {
  navbarHeight: number;
}

const Container = styled.div<IContainerProps>`
  display: flex;
  height: calc(100vh - ${(props) => props.navbarHeight}rem);
  width: 100%;
`;

export default function (props: IFillPageViewProps) {
  const { navbarHeight } = useSelector((state) => state.themeReducer);

  const { children, ...containerProps } = props;
  return (
    <Container navbarHeight={navbarHeight} {...containerProps}>
      {children}
    </Container>
  );
}
