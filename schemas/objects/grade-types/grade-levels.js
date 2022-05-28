import { FaGraduationCap } from 'react-icons/fa';

export default {
  name: 'gradeLevels',
  title: 'Grade Levels',
  type: 'object',
  icon: FaGraduationCap,
  groups: [
    {
      name: 'info',
      title: 'Info',
      default: true,
    },
    {
      name: 'courses',
      title: 'Courses',
    },
    {
      name: 'newFees',
      title: 'Fees - New Family',
    },
    {
      name: 'continuingFees',
      title: 'Fees - Continuing Family',
    },
  ],
  fields: [
    {
      name: 'code',
      title: 'Grade Code',
      type: 'string',
      group: 'info',
    },
    {
      name: 'name',
      title: 'Grade Level',
      type: 'string',
      group: 'info',
    },
    {
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'courses' }],
        },
      ],
      group: 'courses',
    },
    {
      name: 'local',
      title: 'Homeschool Program - Local New Family',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'schoolFees' }],
        },
      ],
      group: 'newFees',
    },
    {
      name: 'international',
      title: 'Homeschool Program - International New Family',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'schoolFees' }],
        },
      ],
      group: 'newFees',
    },
    {
      name: 'dual',
      title: 'Homeschool Program - Dual New Family',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'schoolFees' }],
        },
      ],
      group: 'newFees',
    },
    {
      name: 'formOne',
      title: 'Homeschool Cottage - Form 1 New Family',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'schoolFees' }],
        },
      ],
      group: 'newFees',
    },
    {
      name: 'formTwo',
      title: 'Homeschool Cottage - Form 2 New Family',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'schoolFees' }],
        },
      ],
      group: 'newFees',
    },

    {
      name: 'localCont',
      title: 'Homeschool Program - Local Continuing Family',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'schoolFees' }],
        },
      ],
      group: 'continuingFees',
    },
    {
      name: 'internationalCont',
      title: 'Homeschool Program - International Continuing Family',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'schoolFees' }],
        },
      ],
      group: 'continuingFees',
    },
    {
      name: 'dualCont',
      title: 'Homeschool Program - Dual Continuing Family',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'schoolFees' }],
        },
      ],
      group: 'continuingFees',
    },
    {
      name: 'formOneCont',
      title: 'Homeschool Cottage - Form 1 Continuing Family',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'schoolFees' }],
        },
      ],
      group: 'continuingFees',
    },
    {
      name: 'formTwoCont',
      title: 'Homeschool Cottage - Form 2 Continuing Family',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'schoolFees' }],
        },
      ],
      group: 'continuingFees',
    },
  ],
};
