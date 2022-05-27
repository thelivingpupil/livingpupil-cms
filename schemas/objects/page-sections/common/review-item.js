import { FaStar } from 'react-icons/fa';

export default {
  name: 'reviewItem',
  title: 'Review Item',
  type: 'object',
  icon: FaStar,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Picture',
      type: 'image',
    },
    {
      name: 'review',
      title: 'Review',
      type: 'text',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5],
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
