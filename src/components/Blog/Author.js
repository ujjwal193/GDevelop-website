import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import getAuthorData from '../../../blog/authors';
import Avatar from './Avatar';

const Container = styled.div`
  float: left;
`;

export default function (props) {
  const authorData = getAuthorData(props.author);
  const query = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "authors" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 50, maxHeight: 50) {
                src
              }
            }
          }
        }
      }
    }
  `);
  let picture;
  for (let node of query.allFile.edges) {
    node = node.node;
    if (node.base === authorData.picture)
      picture = node.childImageSharp.fluid.src;
  }
  return (
    <Container>
      <Avatar src={picture} name={authorData.name} />
      <Container>
        <Link
          to={`https://forum.gdevelop-app.com/u/${authorData.forum}/summary`}
        >
          <p>{authorData.name}</p>
          <Container>@{authorData.forum}</Container>
        </Link>
      </Container>
    </Container>
  );
}
