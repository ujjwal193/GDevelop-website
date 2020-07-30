const chalk = require('chalk');
const { createFilePath } = require('gatsby-source-filesystem');
const { getAllLocales } = require('./i18n-helpers');

const supportedLocales = [
  'ar',
  'ca',
  'de',
  'el',
  'en',
  'es',
  'fil',
  'fr',
  'hi',
  'hu',
  'id',
  'it',
  'ja',
  'ko',
  'ms',
  'nl',
  'pl',
  'pt-BR',
  'pt',
  'ru',
  'sl',
  'sr-CS',
  'sr',
  'tr',
  'yo',
  'zh-TW',
  'zh',
];
const locales = [
  {
    name: 'English',
    path: '',
    langCode: 'en',
    longLangCode: 'en-US',
    messages: {},
    translationRatio: 1,
  },
  ...getAllLocales(),
].filter((locale) => {
  if (supportedLocales.includes(locale.langCode)) return true;

  if (locale.translationRatio > 0.6) {
    console.warn(
      `⚠️ Locale ${locale.langCode} has reached a translation ratio of >0.6. Consider adding it in supportedLocales.`
    );
  }

  return false;
});

console.log(
  chalk.blue(
    `${locales.length} locales loaded:`,
    locales.map((locale) => locale.langCode)
  )
);

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.includes('choose-language')) {
    return new Promise((resolve) => {
      deletePage(page);
      createPage(makeChooseLanguagePage(page));

      resolve();
    });
  } else if (
    page.path.includes('terms-and-conditions') ||
    page.path.includes('privacy-policy')
  ) {
    deletePage(page);
    createPage(makeEnglishOnlyPage(page));
  } else {
    return new Promise((resolve) => {
      const pages = makeLocalizedPages(page);
      deletePage(page);
      pages.map((page) => createPage(page));

      resolve();
    });
  }
};

const makeLocalizedPages = (page) => {
  const pages = [];
  locales.map((locale) => {
    const langPathPrefix = locale.path;
    const path = langPathPrefix + page.path;

    pages.push({
      ...page,
      path,
      context: {
        localeCode: locale.langCode,
        stringifiedLocaleMessages: JSON.stringify({
          [locale.langCode]: {
            translation: {
              ...locale.messages,
              LANG_PATH_PREFIX: langPathPrefix ? '/' + langPathPrefix : '',
              LANG_CODE: locale.langCode,
            },
          },
        }),
      },
    });
  });

  return pages;
};

const makeEnglishOnlyPage = (page) => {
  return {
    ...page,
    context: {
      ...page.context,
      localeCode: 'en',
      stringifiedLocaleMessages: JSON.stringify({
        en: {
          translation: {
            LANG_PATH_PREFIX: '',
            LANG_CODE: 'en',
          },
        },
      }),
    },
  };
};

const makeChooseLanguagePage = (page) => {
  const englishOnlyPage = makeEnglishOnlyPage(page);
  return {
    ...englishOnlyPage,
    context: {
      ...englishOnlyPage.context,
      localeNamesAndPaths: locales.map((locale) => ({
        name: locale.name,
        path: locale.path,
      })),
    },
  };
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
