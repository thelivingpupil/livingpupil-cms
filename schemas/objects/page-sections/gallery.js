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
      of: [{ type: 'image' }],
    },
  ],
};
