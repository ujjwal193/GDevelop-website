import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from './Link';
import Title from './Title';
import { List, ListItem } from './List';
import Paragraph from './Paragraph';

const MarkdownText = ({ useParagraphs, ...otherProps }) => (
  <ReactMarkdown
    renderers={{
      root: (props) => props.children,
      paragraph: (props) =>
        useParagraphs ? (
          <Paragraph>{props.children}</Paragraph>
        ) : (
          props.children
        ),
      link: (props) => <Link to={props.href}>{props.children}</Link>,
      heading: (props) => <Title>{props.children}</Title>,
      list: (props) => <List>{props.children}</List>,
      listItem: (props) => <ListItem>{props.children}</ListItem>,
    }}
    {...otherProps}
  />
);

export default MarkdownText;
