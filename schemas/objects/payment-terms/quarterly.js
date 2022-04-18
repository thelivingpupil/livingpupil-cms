export default {
  name: 'quarterly',
  title: 'Quarterly Fee',
  type: 'object',
  fields: [
    {
      name: 'initialFee',
      title: 'Initial Fee',
      type: 'number',
    },
    {
      name: 'misc',
      title: 'Miscellaneous Fee',
      type: 'number',
    },
    {
      name: 'quarterlyFee',
      title: 'Quarterly Fee',
      type: 'number',
    },
  ],
  preview: {
    select: {
      fee: 'initialFee',
      misc: 'misc',
      staggered: 'quarterlyFee',
    },
    prepare: (selection) => ({
      title: `Quarterly: ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.fee)} + ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.misc)} + (${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.staggered)} quarterly)`,
    }),
  },
};
