import { FaChalkboardTeacher } from 'react-icons/fa';

export default {
  name: 'curriculum',
  title: 'Curriculum',
  type: 'document',
  icon: FaChalkboardTeacher,
  fields: [
    {
      name: 'code',
      title: 'Curriculum Code',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Curriculum Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
