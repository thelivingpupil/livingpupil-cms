import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'contact',
  title: 'Contact',
  type: 'object',
  icon: FaPuzzlePiece,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
