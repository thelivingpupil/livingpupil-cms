import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: FaPuzzlePiece,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Hero Items',
      type: 'array',
      of: [{ type: 'heroItem' }],
    },
  ],
};
