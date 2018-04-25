import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/media';

const Container = styled.div`
  margin-left: 20%;
  margin-right: 20%;

  margin-top: 30px;
  margin-bottom: 30px;
  box-shadow: 0 6px 30px 1px #ccc;

  ${media.tablet`
    margin-left: 5%;
    margin-right: 5%;
  `};
`;

const IframeContainer = styled.div`
  overflow: hidden;
  padding-bottom: 64.2%;
  position: relative;
  height: 0;
`;

const Iframe = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export default ({ src }) => (
  <Container>
    <IframeContainer>
      <Iframe
        width="420"
        height="315"
        src={src}
        frameborder="0"
        allowfullscreen
      />
    </IframeContainer>
  </Container>
);
