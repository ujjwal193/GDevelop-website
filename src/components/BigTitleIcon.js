import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const BigTitleIcon = styled(FontAwesomeIcon)`
  /* For some reason, icons can be huge while loading. Add a maximum size to avoid this. */
  max-width: 40px;
  max-height: 50px;
`;

export default BigTitleIcon;
