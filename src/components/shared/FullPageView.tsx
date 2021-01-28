import React from "react";
import styled from "components/shared/globalTheme";
import { useSelector } from "src/state";

type IFillPageViewProps = Omit<IContainerProps, "navbarHeight"> & {
  children?: React.ReactNode;
};

interface IContainerProps {
  navbarHeight: number;
  background?: string;
  textColor?: string;
  firstElement?: boolean;
}

const Container = styled.div<IContainerProps>`
  display: flex;
  height: calc(100vh - ${(props) => props.navbarHeight}rem);
  background: ${({ theme, background }) =>
    background || theme.global.background};
  color: ${({ theme, textColor }) => textColor || theme.global.textColor};
  margin-top: ${({ navbarHeight, firstElement }) =>
    firstElement && `${navbarHeight}rem`};
  width: 100%;
  z-index: -2;
`;

export default function (props: IFillPageViewProps) {
  const { navbarHeight } = useSelector((state) => state.themeReducer);

  const { children, ...containerProps } = props;
  return (
    <Container navbarHeight={6} {...containerProps}>
      {children}
    </Container>
  );
}
