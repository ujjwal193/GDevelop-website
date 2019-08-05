import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/media';

// Rename to white huge title
const WhiteHugeTitle = styled.h1`
  font-size: 72px;
  line-height: 89px;
  font-family: 'PT Sans', Arial, sans-serif;
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
    <WhiteHugeTitle>{children}</WhiteHugeTitle>
  </div>
);
