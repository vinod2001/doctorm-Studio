const topBrand = {
  name: 'topBrand',
  title: 'Top Brand',
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

const topBrands = {
  type: 'object',
  name: 'topBrands',
  title: 'Top Brands',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'contents',
      type: 'array',
      title: 'Top Brands',
      of: [{ type: 'topBrand' }],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Top Brands' };
    },
  },
};

export { topBrand, topBrands }