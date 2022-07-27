import { FaCertificate } from 'react-icons/fa';

const gradesList = [
  'ALL',
  'PRESCHOOL',
  'K1',
  'K2',
  'GRADE_1',
  'GRADE_2',
  'GRADE_3',
  'GRADE_4',
  'GRADE_5',
  'GRADE_6',
  'GRADE_7',
  'GRADE_8',
  'GRADE_9',
  'GRADE_10',
  'GRADE_11',
  'GRADE_12',
];

export default {
  name: 'courses',
  title: 'Courses',
  type: 'document',
  icon: FaCertificate,
  fields: [
    {
      name: 'code',
      title: 'Course Code',
      type: 'string',
    },
    {
      name: 'gradeLevel',
      title: 'Applicable Grade Level',
      type: 'string',
      options: { list: gradesList },
    },
    {
      name: 'title',
      title: 'Course Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Course Description',
      type: 'text',
    },
    {
      name: 'video',
      title: 'Video Link',
      type: 'url',
    },
    {
      name: 'lessons',
      title: 'Lessons',
      type: 'array',
      of: [{ type: 'lesson' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
