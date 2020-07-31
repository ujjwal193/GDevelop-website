import React from 'react';
import styled from 'styled-components';
import { media } from '../../lib/media';

const SkewedBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: -5px;
  left: -5px;
  transform: skewY(-3deg);
  z-index: -1;

  background-color: #7847c0;
  background-image: linear-gradient(13deg, #9746c2 0%, #524f9c 100%);
  background-size: cover;
  box-shadow: inset 0 0px 5px 0px #00000087;
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
`;
const Content = styled.div`
  color: white;
  max-width: 1300px;
  margin: auto;

  padding-top: 35px;
  padding-bottom: 45px;
  padding-left: 75px;
  padding-right: 75px;
  display: block;

  ${media.tablet`
    padding-left: 30px;
    padding-right: 30px;
  `};
`;

export default (props) => (
  <Container>
    <SkewedBackground />
    <Content>{props.children}</Content>
  </Container>
);
