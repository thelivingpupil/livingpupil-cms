import { FaClipboardList } from 'react-icons/fa';

const formLevelTypes = [
  { title: 'Kinder', value: 'KINDER' },
  { title: 'Form 1', value: 'FORM_1' },
  { title: 'Form 2', value: 'FORM_2' },
  { title: 'Form 3', value: 'FORM_3' },
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
      name: 'blueprintFile',
      title: 'Blueprint File',
      type: 'file',
    },
  ],
  preview: {
    select: {
      form: 'formLevel',
    },
    prepare: (selection) => ({
      title: selection.form,
    }),
  },
};
