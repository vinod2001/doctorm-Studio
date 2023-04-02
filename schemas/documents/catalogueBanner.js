export default {
  type: 'object',
  name: 'catalogueBanner',
  title: 'Catalogue Banner',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'url',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: true }),
      title: 'URL',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
};
