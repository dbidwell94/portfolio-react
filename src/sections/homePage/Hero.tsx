import React from "react";
import styled from "styled-components";
import FullPage from "components/shared/FullPageView";
import Model from './Model';
import Background from './Background';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default function () {
  return (
    <>
      <FullPage firstElement>
        <Container>
          <Model />
          <Background />
        </Container>
      </FullPage>
    </>
  );
}
