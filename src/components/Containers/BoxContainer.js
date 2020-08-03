import React from 'react';
import CenteredRow from '../Grid/CenteredRow';

export default (props) => {
  return (
    <div style={{backgroundColor: "#f1f1f1"}}>
    <CenteredRow>
      <div className="tile is-parent" style={{ textAlign: 'initial' }}>
        <article class="tile is-child is-12 box">
          {props.title && <div className="title">{props.title}</div>}
          {props.subtitle && <div className="subtitle">{props.subtitle}</div>}
          <div className="content">{props.children}</div>
        </article>
      </div>
    </CenteredRow>
    </div>
  );
};
