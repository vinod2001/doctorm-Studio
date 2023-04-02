const topCategory = {
  name: 'topCategory',
  title: 'Top Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: true }),
      title: 'URL',
    },
  ],
};

const topCategories = {
  type: 'object',
  name: 'topCategories',
  title: 'Top Categories',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'contents',
      type: 'array',
      title: 'Top Categories',
      of: [{ type: 'topCategory' }],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Top Categories' };
    },
  },
};

export { topCategory, topCategories }