export default {
  name: 'courses',
  title: 'Courses',
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Course Code',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Course Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Course Description',
      type: 'text',
    },
    {
      name: 'video',
      title: 'Video Link',
      type: 'url',
    },
  ],
};
