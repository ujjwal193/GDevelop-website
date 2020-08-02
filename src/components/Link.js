import React from 'react';
import GatsbyLink from 'gatsby-link';
import { translate } from 'react-i18next';
import { trackEvent } from '../lib/analytics';

const Link = ({
  to,
  t,
  noLangPathPrefix,
  download,
  category,
  action,
  label,
  ...otherProps
}) =>
  to === undefined || to === null || download || /^https?:\/\//.test(to) ? (
    <a
      href={to}
      onClick={() => {
        if (category && label)
          trackEvent({
            category,
            label,
            action: action || 'click',
            t,
          });
      }}
      download={download ? true : false}
      {...otherProps}
    />
  ) : (
    <GatsbyLink
      to={(noLangPathPrefix ? '' : t('LANG_PATH_PREFIX')) + to}
      {...otherProps}
    />
  );

export default translate()(Link);
