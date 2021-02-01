import React, { useEffect, useRef, useState } from "react";
import styled from "components/shared/globalTheme";

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

interface IRenderSize {
  width: number;
  height: number;
}

interface ICircleLocation {
  cx: number;
  cy: number;
}

interface ICircleAndRef {
  circle: Circle,
  ref: SVGCircleElement | null
}

class Circle {
  private speed: number;
  private invertCx: boolean;
  private invertCy: boolean;

  constructor(speed?: number) {
    if (!speed) {
      this.speed = Circle.getRandomSpeed(1, 3);
    } else this.speed = speed;

    this.invertCx = Math.random() > 0.5;
    this.invertCy = Math.random() > 0.5;
  }

  private static getRandomSpeed(min: number, max: number): number {
    return Math.random() * (max - min + 1) + min;
  }

  move(circleRef: SVGCircleElement, parent: HTMLDivElement): ICircleLocation {
    const cx = parseFloat(circleRef.getAttributeNS(null, "cx") as string);
    const cy = parseFloat(circleRef.getAttributeNS(null, "cy") as string);
    const { width, height } = parent.getBoundingClientRect();
    if (cx > width - 10) {
      this.invertCx = true;
    }
    if (cx < 10) {
      this.invertCx = false;
    }
    if (cy > height - 10) {
      this.invertCy = true;
    }
    if (cy < 10) {
      this.invertCy = false;
    }
    const newCx = cx + (this.invertCx ? -this.speed : this.speed);
    const newCy = cy + (this.invertCy ? -this.speed : this.speed);
    return { cx: newCx, cy: newCy };
  }
}

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const [renderSize, setRenderSize] = useState<IRenderSize>({
    width: 500,
    height: 500,
  });

  const circles = useRef<ICircleAndRef[]>([]);

  const [circleLocation, setCircleLocation] = useState<ICircleLocation>({
    cy: 0,
    cx: 0,
  });

  const invert = useRef({ cx: false, cy: false });

  function handleResize() {
    if (containerRef.current) {
      setRenderSize({
        width: containerRef.current.getBoundingClientRect().width,
        height: containerRef.current.getBoundingClientRect().height,
      });
    }
  }

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setRenderSize({
        width,
        height,
      });
      setCircleLocation({
        cx: Math.floor(Math.random() * width),
        cy: Math.floor(Math.random() * height),
      });
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function moveCircle(circleRef: SVGCircleElement) {
    if (containerRef.current && invert.current) {
      const cx = parseFloat(circleRef.getAttributeNS(null, "cx") as string);
      const cy = parseFloat(circleRef.getAttributeNS(null, "cy") as string);
      const { width, height } = containerRef.current.getBoundingClientRect();

      if (cx > width - 10) {
        invert.current = { ...invert.current, cx: true };
      }
      if (cx < 10) {
        invert.current = { ...invert.current, cx: false };
      }
      if (cy > height - 10) {
        invert.current = { ...invert.current, cy: true };
      }
      if (cy < 10) {
        invert.current = { ...invert.current, cy: false };
      }

      const newCx = cx + (invert.current.cx ? -2 : 2);
      const newCy = cy + (invert.current.cy ? -2 : 2);
      circleRef.setAttributeNS(null, "cx", newCx.toString());
      circleRef.setAttributeNS(null, "cy", newCy.toString());

      window.requestAnimationFrame(() => moveCircle(circleRef));
    }
  }

  useEffect(() => {
    if (circleRef.current && circleRef.current) {
      window.requestAnimationFrame(() =>
        moveCircle(circleRef.current as SVGCircleElement)
      );
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <svg viewBox={`0 0 ${renderSize.width} ${renderSize.height}`}>
        {}
        <circle
          cx={circleLocation.cx}
          cy={circleLocation.cy}
          r="10"
          stroke="rgb(75, 75, 75)"
          fill="rgb(75, 75, 75)"
          ref={circleRef}
        />
      </svg>
    </Container>
  );
}
