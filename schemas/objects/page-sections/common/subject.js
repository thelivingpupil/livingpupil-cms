import { FaPencilAlt } from 'react-icons/fa';

export default {
  name: 'subject',
  title: 'Subject',
  type: 'object',
  icon: FaPencilAlt,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
