import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'footer',
  title: 'Footer',
  type: 'object',
  icon: FaPuzzlePiece,
  groups: [
    {
      name: 'general',
      title: 'General',
      default: true,
    },
    {
      name: 'links',
      title: 'Links',
    },
    {
      name: 'socials',
      title: 'Social Media Links',
    },
  ],
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'general',
    },
    {
      name: 'about',
      title: 'About',
      type: 'array',
      group: 'links',
      of: [{ type: 'link' }],
    },
    {
      name: 'community',
      title: 'Community',
      type: 'array',
      group: 'links',
      of: [{ type: 'link' }],
    },
    {
      name: 'programs',
      title: 'Programs',
      type: 'array',
      group: 'links',
      of: [{ type: 'link' }],
    },
    {
      name: 'support',
      title: 'Support',
      type: 'array',
      group: 'links',
      of: [{ type: 'link' }],
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      group: 'socials',
      of: [{ type: 'link' }],
    },
  ],
  preview: { prepare: () => ({ title: 'Footer Content' }) },
};
