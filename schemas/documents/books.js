import { FaBookOpen } from 'react-icons/fa';

const bookForTypes = [
  { title: 'Parents', value: 'PARENTS' },
  { title: 'Students', value: 'STUDENTS' },
];

export default {
  name: 'books',
  title: 'Books',
  type: 'document',
  icon: FaBookOpen,
  fields: [
    {
      name: 'bookTitle',
      title: 'Book Title',
      type: 'string',
    },
    {
      name: 'bookDescription',
      title: 'Book Description',
      type: 'string',
    },
    {
      name: 'bookFor',
      title: 'Book For',
      type: 'string',
      options: {
        list: bookForTypes,
      },
    },
    {
      name: 'bookCover',
      title: 'Book Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'bookFile',
      title: 'Book File',
      type: 'file',
    },
  ],
  preview: {
    select: {
      title: 'bookTitle',
      cover: 'bookCover',
    },
    prepare: (selection) => ({
      title: selection.title,
      media: selection.cover,
    }),
  },
};
