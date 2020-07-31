import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../lib/media';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const RightImage = styled.img`
  width: 100%;
  position: relative;
  margin-left: 15px;
  margin-right: 15px;

  box-shadow: 2px 2px 6px 0 #000000aa;
  border-radius: 4px;

  margin-bottom: 15px;
  margin-top: 10px;
  opacity: 0;

  animation: ${fadeIn} 0.8s ease-out forwards;

  ${media.tablet`
    max-width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 10px;
    margin-bottom: 10px;

    box-shadow: 0px 3px 6px 0 #000000aa;

    animation: ${fadeIn} 0.8s ease-out forwards;
  `};
`;

export default (props) => <RightImage {...props} />;
