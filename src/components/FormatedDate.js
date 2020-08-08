import React from 'react';
import styled from 'styled-components';
import { media, ie10and11 } from '../lib/media';

const FormatedDate = {
  fontSize: 15,
  color: '#51509c',
  float: 'left',
};

export default ({ children, white }) => (
    <div style={FormatedDate} white={white} >{children}</div>
);
