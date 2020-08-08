import React from 'react';
import { Link } from 'gatsby';
import getAuthorData from '../../blog/authors';

export default function (props) {
  const authorData = getAuthorData(props.author);
  return (
    <div class="media" style={{ marginTop: '1rem', marginBottom: '0' }}>
      <div class="media-left">
        <figure class="image is-70x70">
          <img
            src={authorData.picture}
            alt={authorData.name}
          />
        </figure>
      </div>
      <div class="media-content" style={{ marginTop: '10px' }}>
        <p class="title is-4">{authorData.name}</p>
        <Link to={`https://forum.gdevelop-app.com/u/${authorData.forum}/summary`}>
  <p class="subtitle is-6">@{authorData.forum}</p>
        </Link>
      </div>
    </div>
  );
}
