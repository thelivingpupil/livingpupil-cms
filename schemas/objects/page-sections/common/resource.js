import { FaDatabase } from 'react-icons/fa';

const resourceList = ['video', 'url', 'form'];

export default {
  name: 'resource',
  title: 'Resource',
  type: 'object',
  icon: FaDatabase,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Resource Type',
      type: 'string',
      options: { list: resourceList },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          relativeOnly: false,
        }),
    },
  ],
  initialValue: { type: resourceList[0] },
};
