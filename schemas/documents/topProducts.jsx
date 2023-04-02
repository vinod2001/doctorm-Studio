import React from 'react';
import ProductSelect from '../../src/components/ProductSelect';
import { formatImageUrl } from '../../src/utils/commonUtils';

const productSearchBox = {
  name: 'productSearchBox',
  type: 'object',
  title: 'Product list',
  components: {
    input: ProductSelect
  },
  fields: [
    {
      name: 'productName',
      type: 'string',
      title: '',
    },
    {
      name: 'productId',
      type: 'string',
      title: '',
    },
    {
      name: 'key',
      type: 'string',
      title: '',
    },
    {
      name: 'productImage',
      type: 'string',
      title: '',
    },
  ],
  preview: {
    select: {
      title: 'productName',
      imageUrl: 'productImage',
    },
    prepare({ title, imageUrl }) {
      return {
        title,
        media: imageUrl ? <img src={formatImageUrl(imageUrl)} alt={title} /> : '',
      };
    },
  },
};

const topProducts = {
  type: 'object',
  name: 'topProducts',
  title: 'Top Products',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Add products',
      name: 'products',
      type: 'array',
      validation: Rule => Rule.unique(),
      of: [{ type: 'productSearchBox' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Top Products',
      };
    },
  },
};

export { topProducts, productSearchBox };
