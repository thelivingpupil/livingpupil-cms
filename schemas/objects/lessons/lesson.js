import { FaBook } from 'react-icons/fa';

export default {
  name: 'lesson',
  title: 'Lessons',
  type: 'object',
  icon: FaBook,
  fields: [
    {
      name: 'name',
      title: 'Lesson Name',
      type: 'string',
    },
    {
      name: 'lesson',
      title: 'Lesson Information',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
