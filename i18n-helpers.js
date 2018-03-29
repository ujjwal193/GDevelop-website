const fs = require('fs');
const path = require('path');
const ISO6391 = require('iso-639-1');

const i18nPath = path.join(__dirname, 'i18n');

const getShortestCode = langLongCode => {
  if (langLongCode === 'pt-BR') return langLongCode;

  const langParts = langLongCode.split('-');
  return langParts[0];
};

const getLocaleMessages = filename => {
  try {
    return JSON.parse(fs.readFileSync(path.join(i18nPath, filename), 'utf8'));
  } catch (e) {
    return null;
  }
};

const getLocaleName = langCode => ISO6391.getName(langCode);

const computeTranslationRatio = locale => {
  const allMessages = Object.keys(locale.messages);
  const sameAsKeyCount = allMessages.filter(key => locale.messages[key] === key)
    .length;

  return 1 - sameAsKeyCount / allMessages.length;
};

const getAllLocales = () =>
  fs
    .readdirSync(i18nPath)
    .filter(filename => filename.indexOf('.json') !== -1)
    .filter(filename => filename !== 'catalog.json')
    .map(filename => ({
      filename,
      langLongCode: filename.replace('.json', ''),
      langCode: getShortestCode(filename.replace('.json', '')),
      messages: getLocaleMessages(filename),
    }))
    .map(locale => ({
      ...locale,
      path: locale.langCode,
      name: getLocaleName(locale.langCode),
      translationRatio: computeTranslationRatio(locale),
    }));

module.exports = {
  getAllLocales,
};
