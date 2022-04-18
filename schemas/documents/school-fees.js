export default {
  name: 'schoolFees',
  title: 'School Fees',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'fees',
      title: 'Applicable Fees',
      type: 'array',
      of: [
        { type: 'annual' },
        { type: 'semiAnnual' },
        { type: 'quarterly' },
        { type: 'monthly' },
      ],
    },
  ],
};
