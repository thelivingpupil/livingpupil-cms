import {FaFileAlt} from 'react-icons/fa';

export default {
  name: 'calendarPage',
  title: 'Calendar Page',
  type: 'document',
  icon: FaFileAlt,
  fields: [
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'bannerImage',
      title: 'Banner image',
      type: 'image',
      description: 'The “Learn. Connect. Grow. Together.” graphic.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'calendarSubscribeLabel',
      title: 'Calendar subscribe label',
      type: 'string',
    },
    {
      name: 'calendarSubscribeText',
      title: 'Calendar subscribe text',
      type: 'string',
    },
    {
      name: 'calendarSubscribeUrl',
      title: 'Calendar subscribe URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'communityTitle',
      title: 'Community title',
      type: 'string',
    },
    {
      name: 'communityText',
      title: 'Community text',
      type: 'string',
    },
    {
      name: 'communityButtonLabel',
      title: 'Community button label',
      type: 'string',
    },
    {
      name: 'districtTitle',
      title: 'District title',
      type: 'string',
    },
    {
      name: 'districtText',
      title: 'District text',
      type: 'string',
    },
    {
      name: 'districtButtonLabel',
      title: 'District button label',
      type: 'string',
    },
  ],
  initialValue: {
    subtitle: 'Stay connected with our upcoming learning, family, and community activities.',
    calendarSubscribeLabel: 'Subscribe to the LP Manila Google Calendar',
    communityTitle: 'Be Part of Our Community',
    communityButtonLabel: 'View Community Events',
    districtTitle: 'Explore District Events',
    districtText: 'Check out events happening in our Cebu, Luzon, and Mindanao districts.',
    districtButtonLabel: 'View District Events',
  },
  preview: {
    prepare: () => ({
      title: 'Calendar Page',
    }),
  },
};
