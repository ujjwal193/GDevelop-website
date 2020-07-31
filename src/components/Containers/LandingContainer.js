import React from 'react';
import styled from 'styled-components';
import { media } from '../../lib/media';
import background from '../../img/background.jpg';

const LandingContainer = styled.div`
  width: 100%;

  margin-bottom: 20px;
  display: block;

  background-color: #7847c0;
  background-image: url(${background});
  background-size: cover;

  ${media.tablet`
    text-align: center;
  `};
`;

const Content = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 40px;

  color: white;
`;

export default (props) => (
  <LandingContainer>
    <Content>{props.children}</Content>
  </LandingContainer>
);
