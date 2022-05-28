import { FaCalendarWeek } from 'react-icons/fa';

export default {
  name: 'semiAnnual',
  title: 'Semi Annual Fee',
  type: 'object',
  icon: FaCalendarWeek,
  fields: [
    {
      name: 'initialFee',
      title: 'Down Payment',
      type: 'number',
    },
    {
      name: 'semiAnnualFee',
      title: 'Semi Annual Fee',
      type: 'number',
    },
  ],
  preview: {
    select: {
      fee: 'initialFee',
      staggered: 'semiAnnualFee',
    },
    prepare: (selection) => ({
      title: `Semi Annual: ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.fee)} + (${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.staggered)} semi-annually)`,
      subtitle: `Total: ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.fee + selection.staggered * 2)}`,
    }),
  },
};
