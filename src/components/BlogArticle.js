import React from 'react';

import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';

import BigTitle from '../components/BigTitle';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteHugeTitle from '../components/WhiteHugeTitle';
import WhiteParagraph from '../components/WhiteParagraph';

import Paragraph from '../components/Paragraph';
import Column from '../components/Grid/Column';
import Row from '../components/Grid/Row';
import BlogBigTitle from '../components/BlogBigTitle';
import FormatedDate from '../components/FormatedDate';

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

import Author from '../components/Author';
import BoxContainer from '../components/Containers/BoxContainer';
import { Link } from 'gatsby';

export default function (props) {
  return (
    <SkewedBorderContainer>
      <Column>
        <Row>
          <BlogBigTitle>{props.post.frontmatter.title}</BlogBigTitle>
        </Row>
        <Row style={{ display: 'inline' }}>
          <div>
            <Author author={props.post.frontmatter.author} />
          </div>
          <div style={{ float: 'right' }}>
            <FormatedDate>{props.post.frontmatter.date}</FormatedDate>
          </div>
        </Row>
      </Column>
      <hr />
     
      <Paragraph dangerouslySetInnerHTML={{ __html: props.post.html }} />
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {props.previous && props.previous.frontmatter.hidden !== true && (
              <Link to={'/blog/post' + props.previous.fields.slug} rel="prev">
                <BigGhostButton>
                  ← Previous - {props.previous.frontmatter.title}
                </BigGhostButton>
              </Link>
            )}
          </li>
          <li>
            {props.next && props.next.frontmatter.hidden !== true && (
              <Link to={'/blog/post' + props.next.fields.slug} rel="next">
                <BigGhostButton>
                  {props.next.frontmatter.title} - Next →
                </BigGhostButton>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </SkewedBorderContainer>
  );
}
