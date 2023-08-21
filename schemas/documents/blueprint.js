import { FaClipboardList } from 'react-icons/fa';

const formLevelTypes = [
  { title: 'Kinder', value: 'KINDER' },
  { title: 'Form 1', value: 'FORM_1' },
  { title: 'Form 2', value: 'FORM_2' },
  { title: 'Form 3', value: 'FORM_3' },
];

const programTypes = [
  { title: 'Homeschool Program', value: 'HOMESCHOOL_PROGRAM' },
  { title: 'Homeschool Cottage', value: 'HOMESCHOOL_COTTAGE' },
];

export default {
  name: 'blueprints',
  title: 'Lesson Blueprint',
  type: 'document',
  icon: FaClipboardList,
  fields: [
    {
      name: 'formLevel',
      title: 'Form Level',
      type: 'string',
      options: {
        list: formLevelTypes,
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
      form: 'formLevel',
      program: 'programType',
    },
    prepare: (selection) => ({
      title: `${selection.program || 'Both'} - ${selection.form}`,
    }),
  },
};
