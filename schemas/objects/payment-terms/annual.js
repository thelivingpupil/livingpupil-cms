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
    {
      name: 'misc',
      title: 'Miscellaneous Fee',
      type: 'number',
    },
  ],
  preview: {
    select: {
      fee: 'totalFee',
      misc: 'misc',
    },
    prepare: (selection) => ({
      title: `Annual: ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.fee)} + ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.misc)}`,
      subtitle: `Total: ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(selection.fee + selection.misc)}`,
    }),
  },
};
