import { FaCalendarDay } from 'react-icons/fa';

export default {
  name: 'quarterly',
  title: 'Quarterly Fee',
  type: 'object',
  icon: FaCalendarDay,
  fields: [
    {
      name: 'initialFee',
      title: 'Down Payment',
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
      staggered: 'quarterlyFee',
    },
    prepare: (selection) => ({
      title: `Quarterly: ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.fee)} + (${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.staggered)} quarterly)`,
      subtitle: `Total: ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.fee + selection.staggered * 3)}`,
    }),
  },
};
