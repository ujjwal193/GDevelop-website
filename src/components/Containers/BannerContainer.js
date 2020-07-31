import styled from 'styled-components';
import background from '../../img/background.jpg';

const BannerContainer = styled.div`
  width: 100%;
  min-height: 20px;

  padding: 20px;
  display: block;
  text-align: center;

  background-color: #7847c0;
  background-image: ${(props) =>
      props.dimmed
        ? 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),'
        : ''}
    url(${(props) => props.background || background});
  background-size: cover;

  color: white;
`;

export default BannerContainer;
