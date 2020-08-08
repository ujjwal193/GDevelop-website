import React from 'react';

import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../components/Navbar';
import Footer from '../components/Footer';

import BigTitle from '../components/BigTitle';
import TransparentContainer from '../components/Containers/TransparentContainer';
import Paragraph from '../components/Paragraph';

import Column from '../components/Grid/Column';
import Row from '../components/Grid/Row';
import FormatedDate from '../components/FormatedDate';

import { List } from '../components/List';
import BigGhostButton from '../components/BigGhostButton';

import Author from '../components/Author';
import BoxContainer from '../components/Containers/BoxContainer';
import { Link } from 'gatsby';

export default function (props) {
  return (
    <React.Fragment>
      <TransparentContainer>
        <Column>
          <Row>
            <BigTitle>{props.post.frontmatter.title}</BigTitle>
          </Row>
          <Row style={{ display: 'inline' }}>
            <div>
              <Author author={props.post.frontmatter.author} />
            </div>
            <div style={{ float: 'right' }}>
              <FormatedDate>{props.post.frontmatter.date}</FormatedDate>
            </div>
          </Row>
        </Column>
        <hr />

        <Paragraph dangerouslySetInnerHTML={{ __html: props.post.html }} />

        <hr />
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
                    ← {props.previous.frontmatter.title}
                  </BigGhostButton>
                </Link>
              )}
            </li>
            <li>
              {props.next && props.next.frontmatter.hidden !== true && (
                <Link to={'/blog/post' + props.next.fields.slug} rel="next">
                  <BigGhostButton>
                    {props.next.frontmatter.title} →
                  </BigGhostButton>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </TransparentContainer>
    </React.Fragment>
  );
}
