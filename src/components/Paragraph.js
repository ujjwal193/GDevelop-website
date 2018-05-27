import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 22px;
  font-family: 'Roboto', Arial, sans-serif;
  color: #6a6a6a;
  margin-bottom: 25px;
  margin-top: 15px;
  text-align: ${props => props.textAlign || 'left'};

  /* This is duplicated in List */
  a {
    color: inherit;
    transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid #51509c;
    box-shadow: inset 0 -2px 0px 0px #51509c;

    &:hover {
      color: white;
      background-color: #51509c;
    }
  }

  strong {
    color: inherit;
  }
`;

export default Paragraph;
