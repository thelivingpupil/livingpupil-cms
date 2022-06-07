import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'process',
  title: 'Process',
  type: 'object',
  icon: FaPuzzlePiece,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'steps',
      title: 'Process Steps',
      type: 'array',
      of: [{ type: 'step' }],
    },
  ],
};
