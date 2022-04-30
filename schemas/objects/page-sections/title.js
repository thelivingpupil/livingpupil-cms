import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'title',
  title: 'Title',
  type: 'object',
  icon: FaPuzzlePiece,
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Section Subtext',
      type: 'string',
    },
  ],
  preview: { prepare: () => ({ title: 'Title Content' }) },
};
