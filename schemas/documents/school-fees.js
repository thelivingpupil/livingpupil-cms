import { FaMoneyBillWave } from 'react-icons/fa';

const programsList = ['HOMESCHOOL_PROGRAM', 'HOMESCHOOL_COTTAGE'];
const typesList = ['NEW', 'CONTINUING'];
const accreditationList = [
  'LOCAL',
  'INTERNATIONAL',
  'DUAL',
  'FORM_ONE',
  'FORM_TWO',
  'FORM_THREE',
];
const gradesList = [
  'PRESCHOOL',
  'K1',
  'K2',
  'GRADE_1',
  'GRADE_2',
  'GRADE_3',
  'GRADE_4',
  'GRADE_5',
  'GRADE_6',
  'GRADE_7',
  'GRADE_8',
  'GRADE_9',
  'GRADE_10',
  'GRADE_11',
  'GRADE_12',
];

export default {
  name: 'schoolFees',
  title: 'School Fees',
  type: 'document',
  icon: FaMoneyBillWave,
  fields: [
    {
      name: 'type',
      title: 'Enrollment Type',
      type: 'string',
      options: { list: typesList },
    },
    {
      name: 'program',
      title: 'Program',
      type: 'string',
      options: { list: programsList },
    },
    {
      name: 'accreditation',
      title: 'Accreditation',
      type: 'string',
      options: { list: accreditationList },
    },
    {
      name: 'gradeLevel',
      title: 'Grade Level',
      type: 'string',
      options: { list: gradesList },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'fees',
      title: 'Applicable Fees',
      type: 'array',
      of: [{ type: 'annual' }, { type: 'semiAnnual' }, { type: 'quarterly' }],
    },
  ],
  preview: {
    select: {
      type: 'type',
      program: 'program',
      accreditation: 'accreditation',
      gradeLevel: 'gradeLevel',
    },
    prepare: (selection) => ({
      title: `[${selection.type} - ${selection.gradeLevel}]: ${selection.program} - ${selection.accreditation}`,
    }),
  },
};
