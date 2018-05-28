import styled from 'styled-components';
import { defaultLink } from './styles/link';

const Paragraph = styled.p`
  font-size: 22px;
  font-family: 'Roboto', Arial, sans-serif;
  color: #6a6a6a;
  margin-bottom: 25px;
  margin-top: 15px;
  margin-left: 5px;
  margin-right: 5px;
  text-align: ${props => props.textAlign || 'left'};

  strong {
    color: inherit;
  }
  ${defaultLink};
`;

export default Paragraph;
