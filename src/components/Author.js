import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import getAuthorData from '../../blog/authors';

const authorTag = {
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
    console.log(query);
  let picture;
  for (let node of query.allFile.edges) {
    node = node.node;
    if(node.base === authorData.picture) picture = node.childImageSharp.fluid.src;
  }
  return (
    <div style={{float:'left'}}>
      <div style={{float:'left', marginRight: 10}}>
        <figure style={{ width: 50 }}>
          <img
            style={{ borderRadius: '100%' }}
            src={picture}
            alt={authorData.name}
          />
        </figure>
      </div>
      <div style={{float:'left'}}>
        <Link
          to={`https://forum.gdevelop-app.com/u/${authorData.forum}/summary`}
        >
          <p>{authorData.name}</p>
          <p style={authorTag}>@{authorData.forum}</p>
        </Link>
      </div>
    </div>
  );
}
