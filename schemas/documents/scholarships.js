import { FaPercent } from 'react-icons/fa';

const scholarshipTypes = [
  { title: 'Percentage (%)', value: 'PERCENTAGE' },
  { title: 'Value (Php)', value: 'VALUE' },
];

export default {
  name: 'scholarships',
  title: 'Scholarships',
  type: 'document',
  icon: FaPercent,
  fields: [
    {
      name: 'code',
      title: 'Scholarship Code',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Scholarship Type',
      type: 'string',
      initialValue: 'VALUE',
      options: {
        list: scholarshipTypes,
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
