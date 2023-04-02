import React from 'react';
import { BsTable } from 'react-icons/bs';
import RichTextCallToAction from '../../src/components/RichTextCallToAction';

const alignText = props => (<span style={{ display: 'block', textAlign: props.style }}>{props.children}</span>);

const richTextCta = {
  type: 'object',
  name: 'richTextCta',
  title: 'Call to action',
  inputComponent: RichTextCallToAction,
  fields: [
    {
      type: 'boolean',
      name: 'hasCta',
      title: 'Enable Call to Action',
    },
    {
      title: 'Type',
      name: 'callToActionType',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['button', 'link'],
      },
    },
    {
      title: 'Link Type',
      name: 'linkType',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['External', 'Internal'],
      },
    },
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: true }),
    },
    {
      title: 'Select Background Color',
      name: 'backgroundColor',
      type: 'color',
    },
  ],
};

const richTextAnnotation = {
  type: 'object',
  name: 'textFormat',
  title: 'Format Text',
  fields: [
    {
      title: 'Select font size',
      name: 'fontSize',
      type: 'string',
      options: {
        list: [
          { title: 'Title', value: 'h2' },
          { title: 'Sub-title', value: 'h5' },
          { title: 'Normal', value: 'normal' },
        ],
      },
    },
    {
      title: 'Select font color',
      name: 'fontColor',
      type: 'color',
    },
    {
      title: 'Call to action',
      name: 'callToAction',
      type: 'richTextCta',
    },
  ],
};

const richTextEditor = {
  type: 'object',
  name: 'richTextEditor',
  title: 'Text Block Component',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      title: 'Select Background Color',
      name: 'backgroundColor',
      type: 'color',
    },
    {
      name: 'richTextBox',
      title: 'Text Block',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Align Left', value: 'normal', blockEditor: { render: alignText } },
            { title: 'Align Center', value: 'center', blockEditor: { render: alignText } },
            { title: 'Align Right', value: 'right', blockEditor: { render: alignText } },
            { title: 'Justify Contents', value: 'justify', blockEditor: { render: alignText } },
          ],
          marks: {
            annotations: [
              {
                title: 'Format Text',
                value: 'textFormat',
                type: 'textFormat',
              },
            ],
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike through', value: 'strike-through' },
            ],
          },
        },
        {
          type: 'table',
          name: 'table',
          title: 'Table',
          icon: BsTable,
        },
      ],
    },
  ],
};

export default [richTextAnnotation, richTextEditor, richTextCta];
