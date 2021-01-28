import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

const {
  default: styled,
  css,
  keyframes,
} = (styledComponents as any) as ThemedStyledComponentsModule<ITheme>;

export enum breakpoints {
    
}

interface IVectorSize {
  x: number;
  y: number;
}

export interface ITheme {
  navbar: {
    background: string;
    textColor: string;
  };
  link: {
    background: string;
    padding: IVectorSize;
    textColor: string;
    margin: IVectorSize;
  };
  global: {
    background: string;
    textColor: string;
  };
}

export const theme: ITheme = {
  navbar: {
    background: "black",
    textColor: "white",
  },
  link: {
    background: "whitesmoke",
    padding: { x: 0.5, y: 0.25 },
    textColor: "black",
    margin: { x: 0.5, y: 0 },
  },
  global: {
    background: "whitesmoke",
    textColor: "black",
  },
};

export { css, keyframes };
export default styled;
