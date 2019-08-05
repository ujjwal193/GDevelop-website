import React from 'react';
import styled from 'styled-components';
import { media } from '../../lib/media';

const SkewedBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  transform: skewY(-3deg);
  z-index: -1;

  background-image: linear-gradient(13deg, #fefefe 0%, #f3f3f3 100%);
  background-size: cover;
  box-shadow: 1px 0px 7px 0px #a0a0a061;
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Content = styled.div`
  margin: auto;
  max-width: 1300px;
  margin: auto;

  padding-top: 25px;
  padding-bottom: 35px;
  padding-left: 75px;
  padding-right: 75px;
  display: block;

  ${media.tablet`
    padding-left: 30px;
    padding-right: 30px;
  `};
`;

export default props => (
  <Container>
    <SkewedBackground />
    <Content>{props.children}</Content>
  </Container>
);
