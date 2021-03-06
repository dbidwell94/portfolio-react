import React from "react";
import styled from "styled-components";
import FullPage from "components/shared/FullPageView";
import translate from "client-tools/translate";
import useTranslate from "client-tools/useTranslate";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default function () {

  const translate = useTranslate();

  return (
    <FullPage firstElement>
      <Container>
        <h1>{translate.get("notfound.pageNotFound")}</h1>
      </Container>
    </FullPage>
  );
}
