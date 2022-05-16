import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'presentation',
  title: 'Presentation',
  type: 'object',
  icon: FaPuzzlePiece,
  groups: [
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
      group: 'video',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'resource',
      group: 'video',
    },
  ],
};
