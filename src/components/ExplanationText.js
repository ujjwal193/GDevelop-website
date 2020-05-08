import styled from 'styled-components';
import { defaultLink } from './styles/link';

const ExplanationText = styled.p`
  font-size: 17px;
  text-align: center;
  font-family: 'Roboto', Arial, sans-serif;
  font-style: italic;
  opacity: 0.7;

  ${defaultLink};
`;

export default ExplanationText;
