import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'sectionTitle',
  title: 'Section Title',
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
      type: 'string',
    },
  ],
};
