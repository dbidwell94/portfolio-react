import React from "react";
import styled from "components/shared/globalTheme";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0.75, 0.75, 0.75, 0.8);
  z-index: 2;
  svg {
    filter: blur(0.25rem);
  }
`;

class SvgCircle {
  readonly xPos: number;
  readonly yPos: number;
  readonly radius: number;

  constructor(rootElement: HTMLElement) {
    this.xPos = 50;
    this.yPos = 50;
    this.radius = 10;
  }

  get element(): JSX.Element {
    return (
      <circle
        cx={this.xPos}
        cy={this.yPos}
        r={this.radius}
        stroke="white"
        fill="white"
      />
    );
  }
}

export default function () {
  return (
    <Container>
      <svg>
        <circle cx="50" cy="50" r="10" stroke="white" fill="white" />
      </svg>
    </Container>
  );
}
