import React from 'react';

import Author from '../components/Author';
import BoxContainer from '../components/Containers/BoxContainer';
import BigGhostButton from '../components/BigGhostButton';
import { Link } from 'gatsby';

export default function (props) {
  return (
    <BoxContainer
      title={props.post.frontmatter.title}
      subtitle={props.post.frontmatter.date}
    >
      <Author />
      <hr />
      <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {props.previous && props.previous.frontmatter.hidden !== true && (
              <Link to={'/blog/post' + props.previous.fields.slug} rel="prev">
                <BigGhostButton>
                  ← Previous - {props.previous.frontmatter.title}
                </BigGhostButton>
              </Link>
            )}
          </li>
          <li>
            {props.next && props.next.frontmatter.hidden !== true && (
              <Link to={'/blog/post' + props.next.fields.slug} rel="next">
                <BigGhostButton>
                  {props.next.frontmatter.title} - Next →
                </BigGhostButton>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </BoxContainer>
  );
}
