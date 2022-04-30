import { FaWindowRestore } from 'react-icons/fa';

export default {
  name: 'sections',
  title: 'Sections',
  type: 'document',
  icon: FaWindowRestore,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'sectionType',
      title: 'Section Type',
      type: 'array',
      description: 'Choose only ONE type for this section',
      validation: (Rule) => Rule.length(1),
      of: [
        { type: 'header' },
        { type: 'hero' },
        { type: 'footer' },
        { type: 'richText' },
      ],
    },
  ],
};
