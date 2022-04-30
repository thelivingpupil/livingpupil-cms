import { FaLink } from 'react-icons/fa';

const iconsList = ['facebook', 'youtube', 'instagram', 'twitter', 'custom'];

export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: FaLink,
  fields: [
    {
      name: 'isExternal',
      title: 'Opens in a new page?',
      type: 'boolean',
    },
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
      name: 'name',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'path',
      title: 'URL',
      type: 'url',
      hidden: ({ parent }) => parent?.hasChildLinks,
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          relativeOnly: false,
        }),
    },
    {
      name: 'hasChildLinks',
      title: 'Has child links?',
      type: 'boolean',
    },
    {
      name: 'childLinks',
      title: 'Child Links',
      type: 'array',
      hidden: ({ parent }) => !parent?.hasChildLinks,
      description: 'The child navigation of your header',
      of: [{ type: 'link' }],
    },
  ],
  initialValue: {
    hasIcon: false,
    icon: iconsList[0],
    hasChildLinks: false,
    isExternal: false,
  },
};
