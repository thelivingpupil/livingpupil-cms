import { FaPuzzlePiece } from 'react-icons/fa';

export default {
  name: 'blogContent',
  title: 'Blog Content',
  type: 'object',
  icon: FaPuzzlePiece,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'resource',
      title: 'Resource',
      type: 'resource',
    },
  ],
};
