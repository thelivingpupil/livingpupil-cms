import { FaCertificate } from 'react-icons/fa';

const gradesList = [
  { title: 'Pre-School', value: 'PRESCHOOL' },
  { title: 'K1', value: 'K1' },
  { title: 'K2', value: 'K2' },
  { title: 'Grade 1', value: 'GRADE_1' },
  { title: 'Grade 2', value: 'GRADE_2' },
  { title: 'Grade 3', value: 'GRADE_3' },
  { title: 'Grade 4', value: 'GRADE_4' },
  { title: 'Grade 5', value: 'GRADE_5' },
  { title: 'Grade 6', value: 'GRADE_6' },
  { title: 'Grade 7', value: 'GRADE_7' },
  { title: 'Grade 8', value: 'GRADE_8' },
  { title: 'Grade 9', value: 'GRADE_9' },
  { title: 'Grade 10', value: 'GRADE_10' },
  { title: 'Grade 11', value: 'GRADE_11' },
  { title: 'Grade 12', value: 'GRADE_12' },
];

const curriculum = [
  { title: 'Homeschool Program', value: 'HOMESCHOOL_PROGRAM' },
  { title: 'Homeschool Cottage', value: 'HOMESCHOOL_COTTAGE' },
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
      name: 'curriculum',
      title: 'Applicable Curriculum',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'grid',
        list: curriculum,
      },
    },
    {
      name: 'gradeLevel',
      title: 'Applicable Grade Level',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'grid',
        list: gradesList,
      },
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
