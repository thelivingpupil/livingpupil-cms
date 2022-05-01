import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'video',
  title: 'Video',
  type: 'object',
  icon: FaPuzzlePiece,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'video',
      title: 'Video',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    },
    {
      name: 'action',
      title: 'Call To Action',
      type: 'link',
      group: 'content',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'resource',
      group: 'video',
    },
  ],
};
