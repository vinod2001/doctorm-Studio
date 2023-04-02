export default {
  type: 'object',
  name: 'linkWithText',
  title: 'URL',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: true }),
    },
    {
      title: 'Text',
      name: 'text',
      type: 'string',
    },
  ],
};
