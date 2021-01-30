import React, { useEffect, useRef, useState } from "react";
import styled from "components/shared/globalTheme";
import {TweenLite} from 'gsap';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: whitesmoke;
  z-index: 1;
  svg {
    filter: blur(0.15rem);
    position: relative;
  }
`;

class SvgCircle {
  readonly xPos: string;
  readonly yPos: string;
  readonly radius: number;
  readonly color: string;
  readonly containerRef: React.RefObject<HTMLDivElement>

  constructor(
    position: { xPos: string; yPos: string },
    containerRef: React.RefObject<HTMLDivElement>,
    color?: string,
    radius = 10
  ) {
    this.xPos = position.xPos;
    this.yPos = position.yPos;
    this.radius = radius;
    if (!color) this.color = "rgb(75, 75, 75)";
    else this.color = color;
    this.containerRef = containerRef;
  }

  get element(): JSX.Element {
    return (
      <circle
        cx={this.xPos}
        cy={this.yPos}
        r={this.radius}
        stroke="rgb(75, 75, 75)"
        fill="rgb(75, 75, 75)"
      />
    );
  }
}

interface IRenderSize {
  width: number;
  height: number;
}

export default function () {
  const containerRef = useRef<HTMLDivElement>(null);
  const [renderSize, setRenderSize] = useState<IRenderSize>({
    width: 500,
    height: 500,
  });

  const [svgCircle] = useState(
    new SvgCircle({ xPos: "20", yPos: "20" }, containerRef)
  );
  function handleResize(event: UIEvent) {
    if (containerRef.current) {
      setRenderSize({
        width: containerRef.current.getBoundingClientRect().width,
        height: containerRef.current.getBoundingClientRect().height,
      });
    }
  }

  useEffect(() => {
    if (containerRef.current) {
      setRenderSize({
        width: containerRef.current.getBoundingClientRect().width,
        height: containerRef.current.getBoundingClientRect().height,
      });
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container ref={(e) => ((containerRef.current as any) = e)}>
      <svg viewBox={`0 0 ${renderSize.width} ${renderSize.height}`}>
        {svgCircle.element}
      </svg>
    </Container>
  );
}
