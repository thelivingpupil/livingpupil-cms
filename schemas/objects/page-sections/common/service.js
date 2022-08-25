import { FaLink } from 'react-icons/fa';

const iconsList = ['apple', 'stroller', 'atom', 'backpack', 'earth-globe'];

export default {
  name: 'service',
  title: 'Service',
  type: 'object',
  icon: FaLink,
  fields: [
    {
      name: 'hasIcon',
      title: 'Has icon?',
      type: 'boolean',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      hidden: ({ parent }) => !parent?.hasIcon,
      options: { list: iconsList },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'path',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          relativeOnly: false,
        }),
    },
  ],
  initialValue: {
    hasIcon: false,
    icon: iconsList[0],
  },
};
