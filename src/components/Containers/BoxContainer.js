import React from 'react';
import SkewedBorderContainer from './SkewedBorderContainer';
import CenteredRow from '../Grid/CenteredRow';
import { useMediaQuery } from 'react-responsive';

export default (props) => {
  const isTablet = !useMediaQuery({ query: '(max-width: 1224px)' });

  let card = (
    <CenteredRow>
      <div className="tile is-parent" style={{ textAlign: 'initial' }}>
        <article class={`tile is-child is-12 box`}>
          {props.title && <div className="title">{props.title}</div>}
          {props.subtitle && <div className="subtitle">{props.subtitle}</div>}
          <div className="content">{props.children}</div>
        </article>
      </div>
    </CenteredRow>
  );

  if (isTablet) {
    card = <SkewedBorderContainer>{card}</SkewedBorderContainer>;
  }

  return card;
};
