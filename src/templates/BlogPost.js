import React from 'react';
import { Link, graphql } from 'gatsby';

import PageContainer from '../lib/PageContainer';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Grid/Spacer';
import BannerContainer from '../components/Containers/BannerContainer';
import BoxContainer from '../components/Containers/BoxContainer';
import BigGhostButton from '../components/BigGhostButton';
import { renderWebMonetizationMeta } from '../lib/WebMonetization';

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
            <Spacer height="10px" style={{backgroundColor: "#f1f1f1"}}/>
            <BoxContainer
              title={post.frontmatter.title}
              subtitle={post.frontmatter.date}
            >
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
                    {previous && previous.frontmatter.hidden !== true && (
                      <Link to={'/blog/post' + previous.fields.slug} rel="prev">
                        <BigGhostButton>
                          ← Previous - {previous.frontmatter.title}
                        </BigGhostButton>
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && next.frontmatter.hidden !== true && (
                      <Link to={'/blog/post' + next.fields.slug} rel="next">
                        <BigGhostButton>
                          {next.frontmatter.title} - Next →
                        </BigGhostButton>
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </BoxContainer>
            <Spacer height="30px" style={{backgroundColor: "#f1f1f1"}}/>
            <Footer t={t}/>
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
      }
    }
  }
`;
