import { FaLink } from 'react-icons/fa';

const iconsList = [
  'book',
  'book-reader',
  'graduation-cap',
  'heart',
  'piggy-bank',
];

export default {
  name: 'featureItem',
  title: 'Feature Item',
  type: 'object',
  icon: FaLink,
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: { list: iconsList },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
  ],
  initialValue: {
    icon: iconsList[0],
  },
};
