import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'partners',
  title: 'Partners',
  type: 'object',
  icon: FaPuzzlePiece,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'logos',
      title: 'Partner Logos',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
