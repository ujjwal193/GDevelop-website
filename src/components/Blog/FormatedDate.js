import React from 'react';
import styled from 'styled-components';

const FormatedDate = {
  fontSize: 15,
  color: '#51509c',
  float: 'right',
};

export default ({ children, white }) => (
  <div style={FormatedDate} white={white}>
    {children}
  </div>
);
