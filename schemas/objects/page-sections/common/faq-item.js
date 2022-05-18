import { FaQuestionCircle } from 'react-icons/fa';

export default {
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'object',
  icon: FaQuestionCircle,
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'question',
    },
  },
};
