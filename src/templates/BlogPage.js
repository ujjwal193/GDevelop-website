import React from 'react';
import { graphql } from 'gatsby';

import PageContainer from '../lib/PageContainer';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Grid/Spacer';
import BannerContainer from '../components/Containers/BannerContainer';
import { renderWebMonetizationMeta } from '../lib/WebMonetization';
import BlogArticle from '../components/BlogArticle';

const BlogPost = ({ data, pageContext }) => {
  // Add localization settings
  pageContext.stringifiedLocaleMessages = JSON.stringify({
    en: {
      translation: {
        LANG_PATH_PREFIX: '',
        LANG_CODE: 'en',
      },
    },
  });

  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <PageContainer {...pageContext}>
      {(t) => {
        return (
          <React.Fragment>
            <Helmet title={t`GDevelop Blog`}>
              <html lang={pageContext.localeCode} />
              <meta name="description" content={post.excerpt} />
              {renderWebMonetizationMeta()}
            </Helmet>
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
            </BannerContainer>

            <BlogArticle post={post} next={next} previous={previous} />

            <Footer t={t} />
          </React.Fragment>
        );
      }}
    </PageContainer>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 350)
      frontmatter {
        title
        date
        description
        hidden
        author
      }
    }
  }
`;
