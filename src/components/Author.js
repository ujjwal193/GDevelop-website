import React from 'react';
import { Link } from 'gatsby';
import getAuthorData from '../../blog/authors';

const authorTag = {
  float: 'left',
};


export default function (props) {
  const authorData = getAuthorData(props.author);
  return (
    <div style={{float:'left'}}>
      <div style={{float:'left', marginRight: 10}}>
        <figure style={{ width: 50 }}>
          <img
            style={{ borderRadius: '100%' }}
            src={authorData.picture}
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
