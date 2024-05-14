import { FaCalendarAlt } from 'react-icons/fa';

export default {
    name: 'nineTermPayment',
    title: 'Nine (9) Term Payment',
    type: 'object',
    icon: FaCalendarAlt,
    fields: [
        {
            name: 'downPayment',
            title: 'Down Payment Fee',
            type: 'number',
        },
        {
            name: 'secondPayment',
            title: '2nd Term Payment Fee',
            type: 'number',
        },
        {
            name: 'thirdPayment',
            title: '3rd Term Payment Fee',
            type: 'number',
        },
        {
            name: 'fourthPayment',
            title: '4th Term Payment Fee',
            type: 'number',
        },
        {
            name: 'fifthPayment',
            title: '5th Term Payment Fee',
            type: 'number',
        },
        {
            name: 'sixthPayment',
            title: '6th Term Payment Fee',
            type: 'number',
        },
        {
            name: 'seventhPayment',
            title: '7th Term Payment Fee',
            type: 'number',
        },
        {
            name: 'eighthPayment',
            title: '8th Term Payment Fee',
            type: 'number',
        },
        {
            name: 'ninthPayment',
            title: '9th Term Payment Fee',
            type: 'number',
        },
    ],
    preview: {
        select: {
            downPayment: 'downPayment',
            term2Payment: 'secondPayment',
            term3Payment: 'thirdPayment',
            term4Payment: 'fourthPayment',
            term5Payment: 'fifthPayment',
            term6Payment: 'sixthPayment',
            term7Payment: 'seventhPayment',
            term8Payment: 'eighthPayment',
            term9Payment: 'ninthPayment',
        },
        prepare: (selection) => ({
            title: `Nine Term Payment -- Down Payment: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.downPayment)} + 2nd Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.term2Payment)} + 3rd Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.term3Payment)} + 4th Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.term4Payment)} + 5th Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.term5Payment)} + 6th Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.term6Payment)} + 7th Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.term7Payment)} + 8th Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.term8Payment)} + 9th Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.term9Payment)}`,
            subtitle: `Total: ${new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'PHP',
            }).format(
                selection.downPayment + selection.secondPayment + selection.thirdPayment +
                selection.fourthPayment + selection.fifthPayment + selection.sixthPayment +
                selection.seventhPayment + selection.eightPayment + selection.ninthPayment
            )}`,
        }),
    },
};
