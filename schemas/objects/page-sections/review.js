import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'review',
  title: 'Review',
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
      title: 'Review Items',
      type: 'array',
      of: [{ type: 'reviewItem' }],
    },
    {
      name: 'more',
      title: 'More Items',
      type: 'link',
    },
  ],
};
