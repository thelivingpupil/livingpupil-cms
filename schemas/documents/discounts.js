import { FaPercent } from 'react-icons/fa';

const discountTypes = [
  { title: 'Percentage (%)', value: 'PERCENTAGE' },
  { title: 'Value (Php)', value: 'VALUE' },
];

export default {
  name: 'discounts',
  title: 'Discounts',
  type: 'document',
  icon: FaPercent,
  fields: [
    {
      name: 'code',
      title: 'Discount Code',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Discount Type',
      type: 'string',
      initialValue: 'VALUE',
      options: {
        list: discountTypes,
      },
    },
    {
      name: 'value',
      title: 'Value',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'count',
      title: 'Inventory Count',
      type: 'number',
    },
  ],
  initialValue: {
    count: 0,
  },
};
