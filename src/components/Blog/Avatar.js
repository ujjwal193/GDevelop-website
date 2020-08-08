import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  float: left;
  margin-right: 10px;
`;

const AvatarImg = styled.img`
  border-radius: 100%;
`;

export default (props) => (
  <Container>
    <AvatarImg src={props.src} alt={props.name} />
  </Container>
);
