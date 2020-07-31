import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageContainer from '../../lib/PageContainer';
import BigTitle from '../../components/BigTitle';
import Paragraph from '../../components/Paragraph';
import TransparentContainer from '../../components/Containers/TransparentContainer';
import Spacer from '../../components/Grid/Spacer';
import MarkdownText from '../../components/MarkdownText';

const NotFoundPage = (props) => (
  <PageContainer {...props.pageContext}>
    {(t) => (
      <React.Fragment>
        <Helmet title="GDevelop - Page not found">
          <html lang="en" />
        </Helmet>
        <Navbar t={t} noTransparency />
        <Spacer height="200px" />
        <TransparentContainer>
          <BigTitle>
            Thanks for getting a subscription and supporting GDevelop!
          </BigTitle>
          <Paragraph>
            <MarkdownText
              source={t(
                'You can now **go back to GDevelop** to use the additional online exports and services.'
              )}
            />
          </Paragraph>
          <Paragraph>
            <MarkdownText
              source={t(
                'As an open-source software, GDevelop requires time and money to be developed and sustainable. Thanks for your contribution! If you want to get more involved, you can also [read all the ways](/contribute) to contribute to GDevelop ecosystem.'
              )}
            />
          </Paragraph>
        </TransparentContainer>
        <Spacer height="200px" />
        <Footer t={t} />
      </React.Fragment>
    )}
  </PageContainer>
);

export default NotFoundPage;
