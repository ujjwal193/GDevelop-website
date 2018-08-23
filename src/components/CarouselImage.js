import React from 'react';
import styled from 'styled-components';
import { defaultBoxShadow } from './styles/shadows';

const CenteredImage = styled.img`
  ${props => props.shadow && defaultBoxShadow};
`;

const Container = styled.div`
  text-align: center;
  margin-left: 40px;
  margin-right: 40px;
`;

export default props => (
  <Container>
    <CenteredImage {...props} />
  </Container>
);
