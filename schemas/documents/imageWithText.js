export default {
  type: 'object',
  name: 'imageWithText',
  title: 'Image with Text',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'backgroundColor',
      type: 'color',
      title: 'Background Color',
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'textColor',
      type: 'color',
      title: 'Text Color',
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'url',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: true }),
      title: 'URL',
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
};
