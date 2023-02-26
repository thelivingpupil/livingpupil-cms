import { FaCalendarAlt } from 'react-icons/fa';

const eventTypes = [
  { title: 'Online', value: 'ONLINE' },
  { title: 'Face to face', value: 'FACETOFACE' },
];

export default {
  name: 'events',
  title: 'Events',
  type: 'document',
  icon: FaCalendarAlt,
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
    },
    {
      name: 'poster',
      title: 'Event Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'description',
      title: 'Event Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'dateandtime',
      title: 'Date and Time',
      type: 'array',
      of: [
        {
          type: 'datetime',
          options: {
            dateFormat: 'MM/DD/YYYY',
            timeFormat: 'hh:mm A',
          },
        },
      ],
    },
    {
      name: 'types',
      title: 'Event Type',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: eventTypes,
          },
        },
      ],
    },
    {
      name: 'joiners',
      title: 'Who can join?',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'link',
      title: 'Registration Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'maplink',
      title: 'Venue',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
  preview: {
    select: {
      title: 'title',
      poster: 'poster',
    },
    prepare: (selection) => ({
      title: selection.title,
      media: selection.poster,
    }),
  },
};
