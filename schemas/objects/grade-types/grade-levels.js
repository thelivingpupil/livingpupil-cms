import { FaGraduationCap } from 'react-icons/fa';

export default {
  name: 'gradeLevels',
  title: 'Grade Levels',
  type: 'object',
  icon: FaGraduationCap,
  fields: [
    {
      name: 'code',
      title: 'Grade Code',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Grade Level',
      type: 'string',
    },
    {
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'courses' }],
        },
      ],
    },
  ],
};
