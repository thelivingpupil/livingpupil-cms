import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'header',
  title: 'Header',
  type: 'object',
  icon: FaPuzzlePiece,
  groups: [
    {
      name: 'menu',
      title: 'Menu',
      default: true,
    },
    {
      name: 'callToAction',
      title: 'Call To Action',
    },
  ],
  fields: [
    {
      name: 'menuLinks',
      title: 'Menu Links',
      type: 'array',
      group: 'menu',
      description: 'The main navigation of your header',
      of: [{ type: 'link' }],
    },
    {
      name: 'cta',
      title: 'Call To Action',
      description: 'The call-to-action in the header section',
      type: 'link',
      group: 'callToAction',
    },
  ],
  preview: { prepare: () => ({ title: 'Header Content' }) },
};
