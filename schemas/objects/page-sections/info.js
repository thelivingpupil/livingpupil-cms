import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'info',
  title: 'Information',
  type: 'object',
  icon: FaPuzzlePiece,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'image',
      title: 'Image',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    },
    {
      name: 'highlight',
      title: 'Highlight',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
    },
    {
      name: 'image',
      title: 'Information Image',
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
      group: 'image',
    },
  ],
};
