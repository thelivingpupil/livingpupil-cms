import { FaDesktop } from 'react-icons/fa';

export default {
  name: 'pages',
  title: 'Website Pages',
  type: 'document',
  icon: FaDesktop,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'hero' }],
    },
  ],
};
