import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'contact',
  title: 'Contact',
  type: 'object',
  icon: FaPuzzlePiece,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'hours',
      title: 'Business Hours',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
