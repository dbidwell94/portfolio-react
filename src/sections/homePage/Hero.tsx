import React from "react";
import styled from "styled-components";
import FullPage from "components/shared/FullPageView";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function () {
  return (
    <FullPage>
      <Container>
        <h1>Hello World</h1>
      </Container>
    </FullPage>
  );
}
