import { FaImage } from 'react-icons/fa';

export default {
  name: 'heroItem',
  title: 'Hero Item',
  type: 'object',
  icon: FaImage,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'subtext',
      title: 'Sub-text',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'cta',
      title: 'Call To Action',
      type: 'array',
      of: [{ type: 'link' }],
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternate Text',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: (selection) => ({ title: selection.title.join(' ') }),
  },
};
