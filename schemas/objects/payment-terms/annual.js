import { FaCalendar } from 'react-icons/fa';

export default {
  name: 'annual',
  title: 'Annual Fee',
  type: 'object',
  icon: FaCalendar,
  fields: [
    {
      name: 'totalFee',
      title: 'Total Fee',
      type: 'number',
    },
  ],
  preview: {
    select: {
      fee: 'totalFee',
    },
    prepare: (selection) => ({
      title: `Annual: ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.fee)}`,
      subtitle: `Total: ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.fee)}`,
    }),
  },
};
