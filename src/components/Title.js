import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/media';

const Title = styled.h1`
  font-size: 36px;
  line-height: 40px;
  font-family: 'Asap', Arial, sans-serif;
  font-weight: 400;
  display: inline-block;
  margin-top: 15px;
  margin-bottom: 5px;

  color: #51509c;

  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);

  ${media.tablet`
    font-size: 30px;
    line-height: 35px;
    text-align: center;
  `};
`;

export default ({ children }) => (
  <div>
    <Title>{children}</Title>
  </div>
);
