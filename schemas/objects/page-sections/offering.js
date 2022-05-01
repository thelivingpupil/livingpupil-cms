import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'offering',
  title: 'Offering',
  type: 'object',
  icon: FaPuzzlePiece,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'offering',
      title: 'List of Offerings',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
