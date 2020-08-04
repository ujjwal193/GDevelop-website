import React from 'react';
import { Link } from 'gatsby';

export default function (props) {
  return (
    <div class="media" style={{ marginTop: '1rem', marginBottom: '0' }}>
      <div class="media-left">
        <figure class="image is-70x70">
          <img
            src="https://bulma.io/images/placeholders/96x96.png"
            alt="Author"
          />
        </figure>
      </div>
      <div class="media-content" style={{ marginTop: '10px' }}>
        <p class="title is-4">Arthur Pacaud</p>
        <Link to="https://forum.gdevelop-app.com/u/arthuro555/summary">
          <p class="subtitle is-6">@arthuro555</p>
        </Link>
      </div>
    </div>
  );
}
