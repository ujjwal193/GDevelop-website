import React from 'react';
import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

const Container = styled.div`
  width: 100%;

  margin: auto;

  .alice-carousel {
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
    padding-top: 30px;
  }

  .alice-carousel__wrapper {
    padding-bottom: 30px;
    border: none;
  }
`;

export default (props) => (
  <Container>
    <AliceCarousel {...props} />
  </Container>
);
