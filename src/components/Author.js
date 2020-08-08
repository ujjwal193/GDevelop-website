import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import getAuthorData from '../../blog/authors';

const left = {
  float: 'left',
};


export default function (props) {
  const authorData = getAuthorData(props.author);
    const query = useStaticQuery(graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "authors"}}) {
          edges {
            node {
              base
              childImageSharp {
                fluid(maxWidth: 96, maxHeight: 96) {
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
    if(node.base === authorData.picture) picture = node.childImageSharp.fluid.src;
  }
  return (
    <div style={left}>
      <div style={{float:'left', marginRight: 10}}>
        <figure style={{ width: 50 }}>
          <img
            style={{ borderRadius: '100%' }}
            src={picture}
            alt={authorData.name}
          />
        </figure>
      </div>
      <div style={left}>
        <Link
          to={`https://forum.gdevelop-app.com/u/${authorData.forum}/summary`}
        >
          <p>{authorData.name}</p>
          <p style={left}>@{authorData.forum}</p>
        </Link>
      </div>
    </div>
  );
}
