import { FaMoneyBill } from 'react-icons/fa';

const tuitioFeeTypes = [
  { title: 'Local Accreditation', value: 'LOCAL' },
  { title: 'International Accreditation', value: 'INTERNATIONAL' },
  { title: 'Dual Accreditation', value: 'DUAL' },
];

export default {
  name: 'tuitionFee',
  title: 'Tuition Fee',
  type: 'object',
  icon: FaMoneyBill,
  fields: [
    {
      name: 'type',
      title: 'Tuition Fee Type',
      type: 'string',
      options: {
        list: tuitioFeeTypes,
      },
    },
    {
      name: 'paymentTerms',
      title: 'Payment Terms',
      type: 'array',
      of: [
        { type: 'fullTermPayment' },
        { type: 'threeTermPayment' },
        { type: 'fourTermPayment' },
      ],
    },
  ],
};
