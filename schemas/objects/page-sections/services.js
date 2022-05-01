import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'services',
  title: 'Services',
  type: 'object',
  icon: FaPuzzlePiece,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'service' }],
    },
  ],
};
