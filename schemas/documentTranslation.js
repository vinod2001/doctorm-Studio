import { languages, baseLanguage } from './locale/languages';

// This is configuration for whole-document translations via sanity-intl plugin
// See https://github.com/LiamMartens/sanity-plugin-intl-input/blob/master/docs/general-configuration.md
const i18n = {
  options: {
    i18n: true,
    base: baseLanguage,
    languages,
    messages: {
      loading: 'Loading languages...',
      missingTranslations: 'Missing translations...',
    },
  },
};

export default i18n;
