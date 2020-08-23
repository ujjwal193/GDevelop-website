import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';


const Container = styled.div`
  display: flex;
  justify-content: left;
  margin-right: 10px;
`;

const AvatarImg = styled.img`
  border-radius: 100%;
`;

export default (props) => {
  const query = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "authors" }, extension: {ne: "js"} }) {
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
    if (node.base === props.picture)
      picture = node.childImageSharp.fluid.src;
  }

  return (
    <Container>
      <AvatarImg src={picture} alt={props.picture} />
    </Container>
  );
}
