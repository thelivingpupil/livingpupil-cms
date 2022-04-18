export default {
  name: 'monthly',
  title: 'Monthly Fee',
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
      name: 'monthlyFee',
      title: 'Monthly Fee',
      type: 'number',
    },
  ],
  preview: {
    select: {
      fee: 'initialFee',
      misc: 'misc',
      staggered: 'monthlyFee',
    },
    prepare: (selection) => ({
      title: `Monthly: ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.fee)} + ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.misc)} + (${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.staggered)} monthly)`,
    }),
  },
};
