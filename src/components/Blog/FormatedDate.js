import React from 'react';

const FormatedDate = {
  fontSize: 15,
  color: '#51509c',
  float: 'right',
};

export default ({ date, white }) => (
  <div style={FormatedDate} white={white}>
    <p>{date}</p>
  </div>
);
