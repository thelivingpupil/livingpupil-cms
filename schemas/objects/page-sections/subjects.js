import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'subjects',
  title: 'Subjects',
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
      title: 'Subjects',
      type: 'array',
      of: [{ type: 'subject' }],
    },
  ],
};
