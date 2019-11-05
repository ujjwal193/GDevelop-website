import React from 'react';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageContainer from '../../lib/PageContainer';
import BigTitle from '../../components/BigTitle';
import TransparentContainer from '../../components/Containers/TransparentContainer';
import MarkdownText from '../../components/MarkdownText';

const PrivacyPolicyPage = props => (
  <PageContainer {...props.pathContext}>
    {t => (
      <React.Fragment>
        <Helmet title="GDevelop - Privacy Policy">
          <html lang="en" />
        </Helmet>
        <Navbar t={t} noTransparency />
        <NavBarSpacer />
        <TransparentContainer>
          <BigTitle>Privacy Policy</BigTitle>
          <MarkdownText
            useParagraphs
            source={t(`
## Overview

This website (https://gdevelop-app.com), related websites (https://forum.gdevelop-app.com, https://wiki.gdevelop-app.com, https://editor.gdevelop-app.com) and related applications (GDevelop), referred to as the Service, are operated by FLORIAN RIVAL. Throughout the site, the terms “we”, “us” and “our” refer to FLORIAN RIVAL.

This page is used to inform visitors and users regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use the Service.

If you choose to use the Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.

The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at https://gdevelop-app.com/legal/terms-and-conditions unless otherwise defined in this Privacy Policy.

## Information Collection and Use

For a better experience, while using our Service, we may require you, for example in the case of creating an account, to provide us with certain personally identifiable information, including but not limited to your email. The information that we request will be stored in a database of the Service.

The Service does use third party services that may collect information used to identify you.

## Log Data

We want to inform you that whenever you use the Service, in a case of an error in the app we collect data and information (through third party products) on your device called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.

These data are used to monitor the proper working on the Service and fix it in case of issues.

Link to privacy policy of some third party service providers used by the website and applications for Log Data:

- Sentry: https://sentry.io/privacy/

## Analytics Data

We want to inform you that whenever you use the Service, at various points in the app we collect data and information (through third party products) on your device called Analytics Data. This Analytics Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.

These data are aggregated and used to understand how people use the Service and improve it.

Link to privacy policy of some third party service providers used by the website and applications for Analytics:

- Keen.io: https://keen.io/privacy-policy/
- Google Analytics: https://policies.google.com/privacy

## Cookies

Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
This Service stores a “cookie” when you create or log in to an account. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.

## Service Providers

We may employ third-party companies and individuals due to the following reasons:

- To facilitate our Service;
- To provide the Service on our behalf;
- To perform Service-related services; or
- To assist us in analyzing how our Service is used.

We want to inform users of this Service that these third parties can have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.

Link to privacy policy of some third party service providers used by the website and applications:

- Google Play Services: https://policies.google.com/privacy
- Firebase: https://firebase.google.com/support/privacy
- Amazon Web Services: https://aws.amazon.com/privacy/

## Security

We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.

## Links to Other Sites

This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.

## Children’s Privacy

These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, We immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.

## Changes to This Privacy Policy

We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.

## Contact Us

If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at [gdevelop-app-support@googlegroups.com](gdevelop-app-support@googlegroups.com).
            `)}
          />
        </TransparentContainer>
        <Footer t={t} />
      </React.Fragment>
    )}
  </PageContainer>
);

export default PrivacyPolicyPage;
