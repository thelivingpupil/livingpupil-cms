import { FaCalendar } from 'react-icons/fa';

export default {
  name: 'fullTermPayment',
  title: 'Full Term Payment',
  type: 'object',
  icon: FaCalendar,
  fields: [
    {
      name: 'fullPayment',
      title: 'Full Payment Fee',
      type: 'number',
    },
  ],
  preview: {
    select: {
      fee: 'fullPayment',
    },
    prepare: (selection) => ({
      title: `Full Payment: ${new Intl.NumberFormat('en-US', {
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
