import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PageContainer from '../../lib/PageContainer';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../../components/Navbar';
import Footer from '../../components/Footer';
import BannerContainer from '../../components/Containers/BannerContainer';
import { renderWebMonetizationMeta } from '../../lib/WebMonetization';

import BigTitle from '../../components/BigTitle';
import TransparentContainer from '../../components/Containers/TransparentContainer';
import Paragraph from '../../components/Paragraph';
import WhiteParagraph from '../../components/WhiteParagraph';

import MakeGameBanner from '../../components/MakeGameBanner';
import BottomCenteredImage from '../../components/BottomCenteredImage';
import BigGhostButton from '../../components/BigGhostButton';
import BigButton from '../../components/BigButton';
import MarkdownText from '../../components/MarkdownText';
import CenteredImage from '../../components/CenteredImage';
import ExplanationText from '../../components/ExplanationText';
import SkewedBorderContainer from '../../components/Containers/SkewedBorderContainer';
import SkewedBackgroundContainer from '../../components/Containers/SkewedBackgroundContainer';
import WhiteBigButton from '../../components/WhiteBigButton';

import Spacer from '../../components/Grid/Spacer';
import CenteredRow from '../../components/Grid/CenteredRow';
import GreyContainer from '../../components/Containers/GreyContainer';
import WhiteHugeTitle from '../../components/WhiteHugeTitle';
import BlogCard from '../../components/BlogCard';

const List = function ({ data, pageContext }) {
  const thumbnails = data.allFile.edges;
  const posts = data.allMarkdownRemark.edges;
  return (
    <PageContainer {...pageContext}>
      {(t) => {
        return (
          <React.Fragment>
            <Helmet title={t('GDevelop Blog')}>
              <html lang={pageContext.localeCode} />
              <meta
                name="description"
                content="GDevelop is a game creator bundled with dozens of features to imagine and create any kind of games. No coding skills are required."
              />
              {renderWebMonetizationMeta()}
            </Helmet>
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
              <WhiteHugeTitle>{t('GDevelop Blog')}</WhiteHugeTitle>
            </BannerContainer>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              const content = node.frontmatter.description || node.excerpt;

              const slug = node.fields.slug.replace('/', '');
              let thumbnail = null;
              for (let n of thumbnails) {
                const { node } = n;
                if (
                  node.relativePath.indexOf(slug) !== -1 &&
                  node.relativePath.indexOf('thumbnail') !== -1
                ) {
                  thumbnail = node.publicURL;
                  break;
                }
              }
              console.log(thumbnail);

              return (
                <React.Fragment>
                  <SkewedBorderContainer>
                    <CenteredRow key={node.fields.slug}>
                      <BlogCard
                        title={title}
                        content={content}
                        link={'/blog/post' + node.fields.slug}
                        date={node.frontmatter.date}
                        thumbnail={thumbnail}
                        author={node.frontmatter.author}
                      />
                    </CenteredRow>
                    {/*
                    <TransparentContainer>
                      <CenteredRow>
                        <BigTitle>{'Make your first game'}</BigTitle>
                        <div> 10 aout 2020 </div>

                      </CenteredRow>
                      <Paragraph>
                        {
                          'Imagine and publis*.jsundled with tutorials and examples.'
                        }
                      </Paragraph>
                    </TransparentContainer>
                    */}

                    {/*  */}
                  </SkewedBorderContainer>
                </React.Fragment>
              );
            })}
            <Footer t={t} />
          </React.Fragment>
        );
      }}
    </PageContainer>
  );
};

export default List;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { hidden: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 350)
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            hidden
            author
          }
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      edges {
        node {
          publicURL
          relativePath
        }
      }
    }
  }
`;
