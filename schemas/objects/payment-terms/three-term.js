import { FaCalendarWeek } from 'react-icons/fa';

export default {
  name: 'threeTermPayment',
  title: 'Three (3) Term Payment',
  type: 'object',
  icon: FaCalendarWeek,
  fields: [
    {
      name: 'downPayment',
      title: 'Downpayment Fee',
      type: 'number',
    },
    {
      name: 'secondPayment',
      title: '2nd Payment Fee',
      type: 'number',
    },
    {
      name: 'thirdPayment',
      title: '3rd Payment Fee',
      type: 'number',
    },
  ],
  preview: {
    select: {
      downPayment: 'downPayment',
      secondPayment: 'secondPayment',
      thirdPayment: 'thirdPayment',
    },
    prepare: (selection) => ({
      title: `Three (3) Term Payment -- Down Payment: ${new Intl.NumberFormat(
        'en-US',
        {
          style: 'currency',
          currency: 'PHP',
        }
      ).format(selection.downPayment)} + 2nd Payment: ${new Intl.NumberFormat(
        'en-US',
        {
          style: 'currency',
          currency: 'PHP',
        }
      ).format(selection.secondPayment)} + 3rd Payment: ${new Intl.NumberFormat(
        'en-US',
        {
          style: 'currency',
          currency: 'PHP',
        }
      ).format(selection.thirdPayment)}`,
      subtitle: `Total: ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(
        selection.downPayment + selection.secondPayment + selection.thirdPayment
      )}`,
    }),
  },
};
