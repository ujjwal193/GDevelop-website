import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../lib/media';

const fadeIn = keyframes`
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
`;

const FullWidthImage = styled.div`
  width: 100%;
  height: 400px;
  background: url(${(props) => props.src});
  background-size: cover;
  background-position: ${(props) =>
    props.backgroundPosition || 'center center'};

  animation: ${fadeIn} 0.5s ease-out forwards;

  ${media.tablet`
    height: 300px;
  `};
`;

export default (props) => <FullWidthImage {...props} />;
