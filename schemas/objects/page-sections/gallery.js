import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  icon: FaPuzzlePiece,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Gallery Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Item Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'cover',
              title: 'Cover Photo',
              type: 'image',
            },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{ type: 'image' }],
            },
          ],
        },
      ],
    },
  ],
};
