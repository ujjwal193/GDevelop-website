import styled from 'styled-components';
import { defaultLink } from './styles/link';

export const List = styled.ul`
  padding: 0;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 0;
  margin-right: 0;
  list-style: none;
`;

export const ListItem = styled.li`
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

  ${defaultLink};
`;
