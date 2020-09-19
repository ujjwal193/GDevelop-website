import React from 'react';
import styled from 'styled-components';
import { defaultLink } from '../styles/link';

import { media } from '../../lib/media';

export const BlogContentContainer = styled.div`
  font-family: 'Roboto', Arial, sans-serif;
  color: #4a4a4a;
  margin-bottom: 25px;
  margin-top: 15px;
  margin-left: 5px;
  margin-right: 5px;
  text-align: 'left';

  p {
      font-size: 22px;
      margin-top: 10px;
      margin-bottom: 10px;
  }

  h1 {
    font-size: 36px;
    line-height: 40px;
    font-family: 'PT Sans', Arial, sans-serif;
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
  }

  ul {
    margin-bottom: 10px;
  }

  li {
    margin: 0;
    padding: 0;
    margin-top: 5px;
    margin-left: 45px;
    font-size: 22px;
    font-family: 'Roboto', Arial, sans-serif;

    &::before {
      content: '•';
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }

    i {
      font-style: normal;
      opacity: 0.8;
    }

    strong {
      color: inherit;
    }
  }

  strong {
    color: inherit;
  }
  ${defaultLink};
`;
