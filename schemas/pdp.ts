import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'productDetail',
  title: 'PDP',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    // defineField({
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // }),
    defineField({
      name: 'productCarousel',
      title: 'Product Carousel',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'thumpnails',
      title: 'Thumpnails',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),

    defineField({
      name: 'measurements',
      title: 'Measurements',
      type: 'string',
    }),

    defineField({
      name: 'measurementImages',
      title: 'Measurement Images',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    // defineField({
    //   name: 'frameImage',
    //   title: 'Frame image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'frameImage',
      title: 'frameImage Images',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
