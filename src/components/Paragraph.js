import styled from 'styled-components';
import { defaultLink } from './styles/link';

const Paragraph = styled.p`
  font-size: 20px;
  font-family: 'Roboto', Arial, sans-serif;
  color: #4a4a4a;
  margin-bottom: 25px;
  margin-top: 15px;
  margin-left: 5px;
  margin-right: 5px;
  text-align: ${(props) => props.textAlign || 'left'};

  strong {
    color: inherit;
  }
  ${defaultLink};
`;

const DivParagraph = styled.div`
  font-size: 20px;
  font-family: 'Roboto', Arial, sans-serif;
  color: #4a4a4a;
  margin-bottom: 25px;
  margin-top: 15px;
  margin-left: 5px;
  margin-right: 5px;
  text-align: ${(props) => props.textAlign || 'left'};

  strong {
    color: inherit;
  }
  ${defaultLink};
`;

export default Paragraph;
export {DivParagraph};
