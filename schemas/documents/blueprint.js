import { FaClipboardList } from 'react-icons/fa';

const formLevelTypes = [
  { title: 'Kinder', value: 'KINDER' },
  { title: 'Form 1', value: 'FORM_1' },
  { title: 'Form 2', value: 'FORM_2' },
  { title: 'Form 3', value: 'FORM_3' },
];

const gradeLevelTypes = [
  { title: 'Kinder 1', value: 'K1' },
  { title: 'Kinder 2', value: 'K2' },
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

const programTypes = [
  { title: 'Homeschool Program', value: 'HOMESCHOOL_PROGRAM' },
  { title: 'Homeschool Cottage', value: 'HOMESCHOOL_COTTAGE' },
];

const schoolYear = [
  { title: '2024-2025', value: "2024-2025" },
  { title: '2025-2026', value: "2025-2026" },
];

export default {
  name: 'blueprints',
  title: 'Lesson Blueprint',
  type: 'document',
  icon: FaClipboardList,
  fields: [
    // {
    //   name: 'formLevel',
    //   title: 'Form Level',
    //   type: 'string',
    //   options: {
    //     list: formLevelTypes,
    //   },
    // },
    {
      name: 'schoolYear',
      title: 'School Year',
      type: 'string',
      options: {
        list: schoolYear,
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
      name: 'programType',
      title: 'Program Type',
      type: 'string',
      options: {
        list: programTypes,
      },
    },
    {
      name: 'blueprintFile',
      title: 'Blueprint File',
      type: 'file',
    },
  ],
  preview: {
    select: {
      grade: 'gradeLevel',
      program: 'programType',
    },
    prepare: (selection) => ({
      title: `${selection.program || 'Both'} - ${selection.grade}`,
    }),
  },
};
