import React from 'react';
import SkewedBorderContainer from './SkewedBorderContainer';
import CenteredRow from '../Grid/CenteredRow';

export default (props) => (
  <SkewedBorderContainer>
    <CenteredRow>
      <div className="tile is-parent" style={{ textAlign: 'initial' }}>
        <article class="tile is-child is-11 box">
          {props.title && <div className="title">{props.title}</div>}
          {props.subtitle && <div className="subtitle">{props.subtitle}</div>}
          <div className="content">{props.children}</div>
        </article>
      </div>
    </CenteredRow>
  </SkewedBorderContainer>
);
