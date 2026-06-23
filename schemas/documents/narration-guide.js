import { FaBookReader } from 'react-icons/fa';

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

const targetingModes = [
  { title: 'Single Grade', value: 'SINGLE_GRADE' },
  { title: 'Multiple Grades', value: 'MULTIPLE_GRADES' },
  { title: 'Form', value: 'FORM' },
];

const programTypes = [
  { title: 'Homeschool Program', value: 'HOMESCHOOL_PROGRAM' },
  { title: 'Homeschool Cottage', value: 'HOMESCHOOL_COTTAGE' },
];

const schoolYear = [
  { title: '2024-2025', value: "2024-2025" },
  { title: '2025-2026', value: "2025-2026" },
  { title: '2026-2027', value: "2026-2027" },
];

export default {
  name: 'narrationGuides',
  title: 'Narration Guide',
  type: 'document',
  icon: FaBookReader,
  fields: [
    {
      name: 'schoolYear',
      title: 'School Year',
      type: 'string',
      options: {
        list: schoolYear,
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
      name: 'targetingMode',
      title: 'Targeting Mode',
      type: 'string',
      options: {
        list: targetingModes,
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gradeLevel',
      title: 'Grade Level',
      type: 'string',
      hidden: ({ document }) => document?.targetingMode !== 'SINGLE_GRADE',
      options: {
        list: gradeLevelTypes,
      },
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.targetingMode === 'SINGLE_GRADE' && !value) {
            return 'Select a grade level';
          }
          return true;
        }),
    },
    {
      name: 'gradeLevels',
      title: 'Grade Levels',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ document }) => document?.targetingMode !== 'MULTIPLE_GRADES',
      options: {
        layout: 'grid',
        list: gradeLevelTypes,
      },
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.targetingMode === 'MULTIPLE_GRADES' && (!value || value.length === 0)) {
            return 'Select at least one grade level';
          }
          return true;
        }),
    },
    {
      name: 'formLevel',
      title: 'Form Level',
      type: 'string',
      hidden: ({ document }) => document?.targetingMode !== 'FORM',
      options: {
        list: formLevelTypes,
      },
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.targetingMode === 'FORM' && !value) {
            return 'Select a form level';
          }
          return true;
        }),
    },
    {
      name: 'narrationGuideFile',
      title: 'Narration Guide File',
      type: 'file',
    },
  ],
  preview: {
    select: {
      targetingMode: 'targetingMode',
      grade: 'gradeLevel',
      grades: 'gradeLevels',
      form: 'formLevel',
      program: 'programType',
    },
    prepare: (selection) => {
      let levelLabel = '';
      if (selection.targetingMode === 'FORM') {
        levelLabel = selection.form;
      } else if (selection.targetingMode === 'MULTIPLE_GRADES') {
        levelLabel = selection.grades?.join(', ') || 'Multiple';
      } else {
        levelLabel = selection.grade;
      }
      return {
        title: `${selection.program || 'Both'} - ${levelLabel}`,
      };
    },
  },
};
