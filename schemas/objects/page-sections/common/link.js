import { FaLink } from 'react-icons/fa';

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
      name: 'name',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'path',
      title: 'Path',
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
  initialValue: { hasChildLinks: false, isExternal: false },
};
