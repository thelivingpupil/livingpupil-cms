import { FaBriefcase } from 'react-icons/fa';

const programTypes = [
  { title: 'Homeschool Program', value: 'HOMESCHOOL_PROGRAM' },
  { title: 'Homeschool Cottage', value: 'HOMESCHOOL_COTTAGE' },
];

const enrollmentTypes = [
  { title: 'New', value: 'NEW' },
  { title: 'Continuing', value: 'CONTINUING' },
];

const cottageTypes = [
  { title: '3 days a week', value: 'THREE_DAYS_A_WEEK' },
  { title: '5 days a week', value: 'FIVE_DAYS_A_WEEK' },
];

const gradeLevelTypes = [
  { title: 'Preschool', value: 'PRESCHOOL' },
  { title: 'Kindergarten 1', value: 'K1' },
  { title: 'Kindergarten 2', value: 'K2' },
  { title: 'Form 1', value: 'FORM_1' },
  { title: 'Grade 1', value: 'GRADE_1' },
  { title: 'Grade 2', value: 'GRADE_2' },
  { title: 'Grade 3', value: 'GRADE_3' },
  { title: 'Form 2', value: 'FORM_2' },
  { title: 'Grade 4', value: 'GRADE_4' },
  { title: 'Grade 5', value: 'GRADE_5' },
  { title: 'Grade 6', value: 'GRADE_6' },
  { title: 'Form 3', value: 'FORM_3' },
  { title: 'Grade 7', value: 'GRADE_7' },
  { title: 'Grade 8', value: 'GRADE_8' },
  { title: 'Grade 9', value: 'GRADE_9' },
  { title: 'Grade 10', value: 'GRADE_10' },
  { title: 'Grade 11', value: 'GRADE_11' },
  { title: 'Grade 12', value: 'GRADE_12' },
];

export default {
  name: 'programs',
  title: 'Programs',
  type: 'document',
  icon: FaBriefcase,
  fields: [
    {
      name: 'programType',
      title: 'Program Type',
      type: 'string',
      options: {
        list: programTypes,
      },
    },
    {
      name: 'cottageType',
      title: 'Cottage Program',
      type: 'string',
      options: {
        list: cottageTypes,
      },
    },
    {
      name: 'enrollmentType',
      title: 'Enrollment Type',
      type: 'string',
      options: {
        list: enrollmentTypes,
      },
    },
    {
      name: 'gradeLevel',
      title: 'Grade Level',
      type: 'string',
      options: {
        list: gradeLevelTypes,
      },
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'tuitionFees',
      title: 'Tuition Fees',
      type: 'array',
      of: [{ type: 'tuitionFee' }],
    },
    {
      name: 'inclusions',
      title: 'Inclusions',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      program: 'programType',
      enrolledAs: 'enrollmentType',
      grade: 'gradeLevel',
    },
    prepare: (selection) => ({
      title: `${selection.grade} - ${selection.enrolledAs}`,
      subtitle: selection.program,
    }),
  },
};
