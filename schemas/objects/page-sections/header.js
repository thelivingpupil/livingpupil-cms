import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'header',
  title: 'Header',
  type: 'object',
  icon: FaPuzzlePiece,
  fields: [
    {
      name: 'menuLinks',
      title: 'Menu Links',
      type: 'array',
      description: 'The main navigation of your header',
      of: [{ type: 'link' }],
    },
    {
      name: 'cta',
      title: 'Call To Action',
      description: 'The call-to-action in the header section',
      type: 'link',
    },
  ],
  preview: { prepare: () => ({ title: 'Header Menu' }) },
};
