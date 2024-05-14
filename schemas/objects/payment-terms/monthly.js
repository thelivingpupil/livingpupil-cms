import { FaCalendarAlt } from 'react-icons/fa';

export default {
    name: 'monthly',
    title: 'Monthly Fee',
    type: 'object',
    icon: FaCalendarAlt,
    fields: [
        {
            name: 'initialFee',
            title: 'Down Payment',
            type: 'number',
        },
        {
            name: 'monthlyFee',
            title: 'Monthly Fee',
            type: 'number',
        },
    ],
    preview: {
        select: {
            fee: 'initialFee',
            staggered: 'monthlyFee',
        },
        prepare: (selection) => ({
            title: `Monthly: ${new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'PHP',
            }).format(selection.fee)} + (${new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'PHP',
            }).format(selection.staggered)} monthly)`,
            subtitle: `Total: ${new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'PHP',
            }).format(selection.fee + selection.staggered * 8)}`,
        }),
    },
};
