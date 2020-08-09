import React from 'react';
import styled from 'styled-components';

const FormatedDate = {
  fontSize: 15,
  color: '#51509c',
  float: 'right',
};

export default ({ date, white }) => (
  <div style={FormatedDate} white={white}>
    <p>{new Date(date).toLocaleString(navigator.language)}</p>
  </div>
);
