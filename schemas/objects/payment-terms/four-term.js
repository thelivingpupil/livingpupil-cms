import { FaCalendarDay } from 'react-icons/fa';

export default {
  name: 'fourTermPayment',
  title: 'Four (4) Term Payment',
  type: 'object',
  icon: FaCalendarDay,
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
    {
      name: 'fourthPayment',
      title: '4th Payment Fee',
      type: 'number',
    },
  ],
  preview: {
    select: {
      downPayment: 'downPayment',
      secondPayment: 'secondPayment',
      thirdPayment: 'thirdPayment',
      fourthPayment: 'fourthPayment',
    },
    prepare: (selection) => ({
      title: `Four (4) Term Payment -- Down Payment: ${new Intl.NumberFormat(
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
      ).format(selection.thirdPayment)} + 4th Payment: ${new Intl.NumberFormat(
        'en-US',
        {
          style: 'currency',
          currency: 'PHP',
        }
      ).format(selection.fourthPayment)}`,
      subtitle: `Total: ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(
        selection.downPayment +
          selection.secondPayment +
          selection.thirdPayment +
          selection.fourthPayment
      )}`,
    }),
  },
};
