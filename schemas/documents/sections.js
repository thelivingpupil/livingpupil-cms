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
        { type: 'blogContent' },
        { type: 'contact' },
        { type: 'faq' },
        { type: 'features' },
        { type: 'footer' },
        { type: 'gallery' },
        { type: 'header' },
        { type: 'hero' },
        { type: 'info' },
        { type: 'offering' },
        { type: 'partners' },
        { type: 'presentation' },
        { type: 'richText' },
        { type: 'services' },
        { type: 'video' },
      ],
    },
  ],
};
