import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from './Link';

const MarkdownText = props => (
  <ReactMarkdown
    renderers={{
      root: props => props.children,
      paragraph: props => props.children,
      link: props => <Link to={props.href}>{props.children}</Link>,
    }}
    {...props}
  />
);

export default MarkdownText;
