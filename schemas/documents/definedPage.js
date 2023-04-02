import i18n from '../documentTranslation';
import { addLocalization } from '../locale/languages';

const languageFields = addLocalization('definedPageContentSchema');

const definedPageContentSchema = {
  type: 'object',
  name: 'definedPageContentSchema',
  title: 'Page Contents',
  fields: [
    {
      name: 'contents',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'topProducts' },
        { type: 'topCategories' },
        { type: 'topBrands' },
        { type: 'bannerCarousal' },
        { type: 'catalogueBanner' },
        { type: 'imageWithText' },
        { type: 'imageWithTextGrid' },
        { type: 'richTextEditor' },
      ],
    },
  ],
};

const definedPageContent = {
  type: 'object',
  name: 'definedPageContent',
  title: 'Page Contents',
  ...i18n,
  fields: [
    ...definedPageContentSchema.fields,
    ...languageFields,
  ],
};

const definedPage = {
  type: 'document',
  name: 'definedPage',
  title: 'Defined Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Page type',
      name: 'pageType',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        documentType: 'definedPage',
        list: [
          { title: 'Select a page type', value: '' },
          { title: 'Home', value: 'home' },
        ],
      },
    },
    {
      name: 'translations',
      type: 'definedPageContent',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
    },
    {
      name: 'seoDetails',
      type: 'seo',
      title: 'SEO',
      description: 'SEO details',
    },
  ],
};

export default [
  definedPage,
  definedPageContent,
  definedPageContentSchema,
];
