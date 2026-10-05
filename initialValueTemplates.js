import T from '@sanity/base/initial-value-template-builder';

export default [
  ...T.defaults().filter((template) => template.getSchemaType() !== 'calendarPage'),
];
