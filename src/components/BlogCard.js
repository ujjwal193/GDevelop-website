import React from 'react';
import { Link } from 'gatsby';
import Author from '../components/Author';

import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';

import BigTitle from '../components/BigTitle';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteHugeTitle from '../components/WhiteHugeTitle';
import WhiteParagraph from '../components/WhiteParagraph';

import chromeWithGame from '../img/chrome-with-game.png';
import { List, ListItem } from '../components/List';
import MakeGameBanner from '../components/MakeGameBanner';
import BottomCenteredImage from '../components/BottomCenteredImage';
import BigGhostButton from '../components/BigGhostButton';
import BigButton from '../components/BigButton';
import CenteredRow from '../components/Grid/CenteredRow';
import MarkdownText from '../components/MarkdownText';
import CenteredImage from '../components/CenteredImage';
import lilBubPlatformer from '../img/games/lil-bub-hello-earth/lil-bub-platformer.png';
import ExplanationText from '../components/ExplanationText';
import SkewedBorderContainer from '../components/Containers/SkewedBorderContainer';
import SkewedBackgroundContainer from '../components/Containers/SkewedBackgroundContainer';
import WhiteBigButton from '../components/WhiteBigButton';
import { renderWebMonetizationMeta } from '../lib/WebMonetization';
import Paragraph from '../components/Paragraph';
import BlogBigTitle from '../components/BlogBigTitle';

import FormatedDate from '../components/FormatedDate';

import BoxContainer from '../components/Containers/BoxContainer';
import Column from './Grid/Column';
import Row from './Grid/Row';

class BlogCard extends React.Component {
  render() {
    let card = (
      <div>
        <Column>
          <Row>
            <BlogBigTitle>{this.props.title}</BlogBigTitle>
          </Row>
          <div>
            <Author white author={this.props.author} />
            <FormatedDate>{this.props.date}</FormatedDate>
          </div>
        </Column>
        {this.props.thumbnail && (
          <div className="card-image">
            <figure className="image">
              <img
                style={{
                  objectFit: 'cover',
                  height: '200px',
                  objectPosition: '50% 50%',
                }}
                src={this.props.thumbnail}
              />
            </figure>
          </div>
        )}
        <Paragraph>{this.props.content}</Paragraph>
      </div>
    );

    if (this.props.link) {
      card = <Link to={this.props.link}>{card}</Link>;
    }

    return <div>{card}</div>;
  }
}

export default BlogCard;
