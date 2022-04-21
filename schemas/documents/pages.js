import { FaDesktop } from 'react-icons/fa';

export default {
  name: 'pages',
  title: 'Website Pages',
  type: 'document',
  icon: FaDesktop,
  fields: [
    {
      name: 'index',
      title: 'Is this the landing page?',
      type: 'boolean',
    },
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
      title: 'Content',
      type: 'array',
      description: 'Add sections to your page',
      of: [
        {
          type: 'reference',
          to: { type: 'sections' },
        },
      ],
    },
  ],
  initialValue: { index: false },
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare: (selection) => ({
      title: selection.title,
      subtitle: `/${selection.slug?.current || ''}`,
    }),
  },
};
