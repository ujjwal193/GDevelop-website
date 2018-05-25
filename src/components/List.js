import React from 'react';
import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  margin-left: 45px;
  font-size: 22px;
  font-family: 'Roboto', Arial, sans-serif;
  color: #6a6a6a;

  &::before {
    content: '•';
    color: #51509c;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  i {
    font-style: normal;
    opacity: 0.8;
  }

  /* This is duplicated in Paragraph */
  a {
    color: inherit;
    transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid #51509c;
    box-shadow: inset 0 -2px 0px 0px #51509c;

    &:hover {
      color: white;
      background-color: #51509c;
    }
  }

  strong {
    color: inherit;
  }
`;
