import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/media';

const WhiteBigTitle = styled.h1`
  font-size: 72px;
  line-height: 89px;
  font-family: 'Asap', Arial, sans-serif;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;

  color: white;

  ${media.tablet`
    font-size: 48px;
    line-height: 58px;
  `};
`;

export default ({ children }) => (
  <div>
    <WhiteBigTitle>{children}</WhiteBigTitle>
  </div>
);
