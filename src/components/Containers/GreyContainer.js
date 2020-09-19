import React from 'react';
import styled from 'styled-components';
import { media } from '../../lib/media';

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 20px;
  margin-top: -20px;
  margin-bottom: 0px;

  background-color: #f1f1f1;
  background-size: cover;
  box-shadow: 1px 0px 7px 0px #a0a0a061;
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

export default (props) => (
  <Container>
    <Content>{props.children}</Content>
  </Container>
);
