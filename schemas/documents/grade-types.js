import { FaPollH } from 'react-icons/fa';

export default {
  name: 'gradeTypes',
  title: 'Grade Types',
  type: 'document',
  icon: FaPollH,
  fields: [
    {
      name: 'code',
      title: 'Type Code',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Grade Type',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'level',
      title: 'Grade Level',
      type: 'array',
      of: [{ type: 'gradeLevels' }],
    },
    // {
    //   name: 'payment',
    //   title: 'Payment',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{ type: 'schoolFees' }],
    //     },
    //   ],
    // },
  ],
};
