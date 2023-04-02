export default {
  type: 'object',
  name: 'imageWithTextGrid',
  title: 'Image with text grid',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'contents',
      type: 'array',
      title: 'Image with text grid',
      of: [{ type: 'imageWithText' }],
    },
  ]
};
