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
            secondPayment: 'secondPayment',
            thirdPayment: 'thirdPayment',
            fourthPayment: 'fourthPayment',
            fifthPayment: 'fifthPayment',
            sixthPayment: 'sixthPayment',
            seventhPayment: 'seventhPayment',
            eightPayment: 'eighthPayment',
            ninthPayment: 'ninthPayment',
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
            ).format(selection.secondPayment)} + 3rd Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.thirdPayment)} + 4th Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.fourthPayment)} + 5th Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.fifthPayment)} + 6th Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.sixthPayment)} + 7th Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.seventhPayment)} + 8th Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.eighthPayment)} + 9th Term: ${new Intl.NumberFormat(
                'en-US',
                {
                    style: 'currency',
                    currency: 'PHP',
                }
            ).format(selection.ninthPayment)}`,
            subtitle: `Total: ${new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'PHP',
            }).format(
                selection.downPayment + selection.secondPayment + selection.thirdPayment +
                selection.fourthPayment + selection.fifthPayment + selection.sixthPayment +
                selection.seventhPayment + selection.eighthPayment + selection.ninthPayment
            )}`,
        }),
    },
};
