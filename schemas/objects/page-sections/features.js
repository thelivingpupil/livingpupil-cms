import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'features',
  title: 'Features',
  type: 'object',
  icon: FaPuzzlePiece,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'featureItem' }],
    },
  ],
};
