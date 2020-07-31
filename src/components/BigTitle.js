import React from 'react';
import styled from 'styled-components';
import { media, ie10and11 } from '../lib/media';

const BigTitle = styled.h1`
  font-size: 46px;
  line-height: 55px;
  font-family: 'PT Sans', Arial, sans-serif;
  font-weight: 600;
  display: inline-block;
  margin-top: 35px;
  margin-bottom: 10px;

  color: ${(props) => (props.white ? 'white' : '#51509c')};

  text-shadow: ${(props) =>
    props.white
      ? '0px 1px 2px rgba(0,0,0,0.8);'
      : '0px 2px 2px rgba(0, 0, 0, 0.1)'};

  ${ie10and11`
    color: #3c4698;
    background-image: none;
    background: none;
  `};

  ${media.tablet`
    margin-top: 25px;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
  `};
`;

export default ({ children, white }) => (
  <div>
    <BigTitle white={white}>{children}</BigTitle>
  </div>
);
