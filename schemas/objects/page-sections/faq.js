import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'faq',
  title: 'FAQ',
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
      title: 'FAQ Items',
      type: 'array',
      of: [{ type: 'faqItem' }],
    },
  ],
};
