import { FaCalendarAlt } from 'react-icons/fa';

export default {
    name: 'nineTermPayment',
    title: 'Nine Term Payment',
    type: 'object',
    icon: FaCalendarAlt,
    fields: [
        {
            name: 'downPayment',
            title: 'Down Payment Fee',
            type: 'number',
        },
        {
            name: 'term2Payment',
            title: '2nd Term Payment Fee',
            type: 'number',
        },
        {
            name: 'term3Payment',
            title: '3rd Term Payment Fee',
            type: 'number',
        },
        {
            name: 'term4Payment',
            title: '4th Term Payment Fee',
            type: 'number',
        },
        {
            name: 'term5Payment',
            title: '5th Term Payment Fee',
            type: 'number',
        },
        {
            name: 'term6Payment',
            title: '6th Term Payment Fee',
            type: 'number',
        },
        {
            name: 'term7Payment',
            title: '7th Term Payment Fee',
            type: 'number',
        },
        {
            name: 'term8Payment',
            title: '8th Term Payment Fee',
            type: 'number',
        },
        {
            name: 'term9Payment',
            title: '9th Term Payment Fee',
            type: 'number',
        },
    ],
    preview: {
        select: {
            downPayment: 'downPayment',
            term2Payment: 'term2Payment',
            term3Payment: 'term3Payment',
            term4Payment: 'term4Payment',
            term5Payment: 'term5Payment',
            term6Payment: 'term6Payment',
            term7Payment: 'term7Payment',
            term8Payment: 'term8Payment',
            term9Payment: 'term9Payment',
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
                selection.downPayment + selection.term2Payment + selection.term3Payment +
                selection.term4Payment + selection.term5Payment + selection.term6Payment +
                selection.term7Payment + selection.term8Payment + selection.term9Payment
            )}`,
        }),
    },
};
