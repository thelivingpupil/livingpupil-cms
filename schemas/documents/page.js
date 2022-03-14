export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'hero' }],
    },
  ],
};
