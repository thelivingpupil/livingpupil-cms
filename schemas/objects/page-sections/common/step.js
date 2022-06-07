import { FaSortNumericDownAlt } from 'react-icons/fa';

export default {
  name: 'step',
  title: 'Step Item',
  type: 'object',
  icon: FaSortNumericDownAlt,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Picture',
      type: 'image',
    },
  ],
};
