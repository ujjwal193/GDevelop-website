import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faChevronUp from '@fortawesome/fontawesome-free-solid/faChevronUp';
import faLanguage from '@fortawesome/fontawesome-free-solid/faLanguage';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

import Link from './Link';
import { media } from '../lib/media';
import config from '../config';

import logo from '../img/logo-white.svg';
import background from '../img/background.jpg';

const NavigationBar = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 100;

  background-image: ${(props) =>
      props.dimmed && !props.transparent
        ? 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), '
        : ''}
    ${(props) =>
      props.transparent ? 'none' : `url(${props.background || background})`};
  background-size: cover;

  ${media.tablet`
    padding-top: 5px;
    margin-left: 0;
    margin-right: 0;
  `};
`;

const Container = styled.div`
  align-items: stretch;
  display: flex;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 10px;

  ${media.tablet`
    display: block;
  `};
`;

const ItemsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  ${media.tablet`
    display: ${(props) => (props.open ? 'block' : 'none')};
  `};
`;

const NavLink = styled(Link)`
  color: white;
  line-height: 3.25rem;
  padding: 0 8px;
  position: relative;

  ${media.tablet`
    display: block;
    line-height: 1.25rem;
    padding: 5px 8px;
  `};

  &:hover {
    color: white;
  }
`;

const LeftContainer = styled.div`
  justify-content: flex-start;

  ${media.tablet`
    display: block;
  `};
`;

const RightContainer = styled.div`
  justify-content: flex-end;
  margin-left: auto;

  ${media.tablet`
    display: block;
  `};
`;

const LogoContainer = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  ${media.tablet`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  `};
`;

const MenuIconsContainer = styled.div`
  display: none;

  ${media.tablet`
    display: flex;
    flex-direction: row;
  `};
`;

const MenuIcon = styled.a`
  color: white;
  font-size: 24px;
  margin-left: 25px;

  &:hover {
    color: white;
  }
`;

const LogoLink = styled(Link)`
  line-height: normal;
`;

const Logo = styled.img`
  width: 200px;

  ${media.tablet`
    width: 140px;
  `};
`;

const IconItem = styled(FontAwesomeIcon)`
  /* For some reason, icons can be huge while loading. Add a maximum size to avoid this. */
  max-height: 20px;
  max-width: 32px;
`;

export const NavBarSpacer = styled.div`
  height: 60px;
`;

class Navbar extends React.Component {
  state = {
    transparent: true,
    open: false,
  };

  componentDidMount() {
    //eslint-disable-next-line
    if (typeof window !== 'undefined') {
      //eslint-disable-next-line
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    //eslint-disable-next-line
    if (typeof window !== 'undefined') {
      //eslint-disable-next-line
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = () => {
    //eslint-disable-next-line
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    this.setState({
      transparent: yOffset < 35, //eslint-disable-line
    });
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { t, noTransparency, background, dimmed } = this.props;
    const { transparent, open } = this.state;

    return (
      <NavigationBar
        transparent={transparent && !open && !noTransparency}
        background={background}
        dimmed={dimmed}
      >
        <Container>
          <LogoContainer>
            <LogoLink to="/">
              <Logo src={logo} alt="GDevelop" />
            </LogoLink>
            <MenuIconsContainer>
              <NavLink to="/download">{t('Download')}</NavLink>
              <MenuIcon onClick={this.toggleOpen}>
                {open ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faBars} />
                )}
              </MenuIcon>
            </MenuIconsContainer>
          </LogoContainer>
          <ItemsContainer open={open}>
            <LeftContainer>
              <NavLink to="/features">{t('Features')}</NavLink>
              <NavLink to="/games-showcase">{t('Games')}</NavLink>
              <NavLink to="/game-studios-indies-and-education">
                {t('Game studios & education')}
              </NavLink>
            </LeftContainer>
            <RightContainer>
              <NavLink
                to={config.wikiUrl}
                category="wiki"
                label="navbar-tutorials"
              >
                {t('Learn')}
              </NavLink>
              <NavLink to="/download">{t('Download')}</NavLink>
              <NavLink
                to={config.githubUrl}
                title="GDevelop GitHub"
                category="github"
                action="opened"
                label="icon"
              >
                <IconItem icon={faGithub} />
              </NavLink>
              <NavLink
                to="/choose-language"
                noLangPathPrefix
                title="Choose language"
                alt="Choose language"
              >
                <IconItem icon={faLanguage} />
              </NavLink>
            </RightContainer>
          </ItemsContainer>
        </Container>
      </NavigationBar>
    );
  }
}

export default Navbar;
