import React, {forwardRef, useMemo} from 'react';
import PropTypes from 'prop-types';
import {useId} from '@reach/auto-id';
import {Select} from '@sanity/ui';
import {FaCalendarAlt} from 'react-icons/fa';
import {FormField} from '@sanity/base/components';
import {withDocument} from 'part:@sanity/form-builder';
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event';

const eventTypes = [
  {title: 'Online', value: 'ONLINE'},
  {title: 'Face to face', value: 'FACETOFACE'},
];

const audienceOptions = [
  {title: 'Parents', value: 'parents'},
  {title: 'Students', value: 'students'},
  {title: 'Families', value: 'families'},
  {title: 'Community', value: 'community'},
];

const districtOptions = [
  {title: 'Luzon', value: 'luzon'},
  {title: 'Cebu', value: 'cebu'},
  {title: 'Mindanao', value: 'mindanao'},
];

const areasByDistrict = {
  luzon: [
    {title: 'Bayani', value: 'bayani'},
    {title: 'Magiting', value: 'magiting'},
    {title: 'Maharlika', value: 'maharlika'},
    {title: 'Marangal', value: 'marangal'},
    {title: 'Masinag', value: 'masinag'},
  ],
  cebu: [
    {title: 'South', value: 'south'},
    {title: 'Central', value: 'central'},
    {title: 'North', value: 'north'},
  ],
  mindanao: [
    {title: 'SOCCSKSARGEN', value: 'soccsksargen'},
    {title: 'Bukidnon – CDO', value: 'bukidnon-cdo'},
    {title: 'Misamis Occidental', value: 'misamis-occidental'},
    {title: 'Zamboanga', value: 'zamboanga'},
    {title: 'Davao', value: 'davao'},
    {title: 'Iligan – Misamis Oriental', value: 'iligan-misamis-oriental'},
  ],
};

const areaOptions = Object.values(areasByDistrict).flat();

// Published events created before these fields existed stay valid without them.
const LEGACY_EVENTS_BEFORE = '2026-10-05T03:30:00.000Z';

function isLegacyEvent(document) {
  return Boolean(document?._createdAt && document._createdAt < LEGACY_EVENTS_BEFORE);
}

function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    value === '' ||
    (typeof value === 'string' && value.trim() === '')
  );
}

function requiredOnNewEvents(Rule) {
  return Rule.custom((value, context) => {
    if (isLegacyEvent(context.document) || !isEmpty(value)) {
      return true;
    }

    return 'Required';
  });
}

function areaBelongsToDistrict(district, area) {
  return (areasByDistrict[district] || []).some((option) => option.value === area);
}

const AreaSelect = forwardRef(function AreaSelect(props, ref) {
  const {document, type, value, onChange, readOnly, markers, presence, level, onFocus} = props;
  const inputId = useId();
  const district = document?.district;
  const options = areasByDistrict[district] || [];
  const valueIsListed = !value || options.some((option) => option.value === value);
  const errorMessage = useMemo(() => {
    const error = (markers || []).find(
      (marker) => marker.type === 'validation' && marker.level === 'error'
    );

    return error?.item?.message;
  }, [markers]);

  const handleChange = (event) => {
    const next = event.currentTarget.value;
    onChange(PatchEvent.from(next ? set(next) : unset()));
  };

  return (
    <FormField
      description={type.description}
      title={type.title}
      level={level}
      inputId={inputId}
      __unstable_markers={markers}
      __unstable_presence={presence}
    >
      <Select
        id={inputId}
        ref={ref}
        readOnly={readOnly}
        customValidity={errorMessage}
        value={value || ''}
        onChange={handleChange}
        onFocus={() => {
          if (onFocus) onFocus();
        }}
      >
        <option value="">{district ? 'Whole district' : 'Clear area'}</option>
        {!valueIsListed && <option value={value}>{value}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </Select>
    </FormField>
  );
});

AreaSelect.propTypes = {
  document: PropTypes.shape({
    district: PropTypes.string,
  }),
  type: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  markers: PropTypes.array,
  presence: PropTypes.array,
  level: PropTypes.number,
  onFocus: PropTypes.func,
};

const AreaSelectInput = withDocument(AreaSelect);

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
      name: 'audience',
      title: 'Audience',
      type: 'string',
      description: 'Card badge. The Students, Parents, and Community filters use this field.',
      options: {
        list: audienceOptions,
        layout: 'radio',
      },
      validation: (Rule) =>
        requiredOnNewEvents(Rule).custom((value) => {
          if (isEmpty(value) || audienceOptions.some((option) => option.value === value)) {
            return true;
          }

          return 'Choose Parents, Students, Families, or Community';
        }),
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this event in the Featured Events row.',
      initialValue: false,
    },
    {
      name: 'featuredOrder',
      title: 'Featured order',
      type: 'number',
      description: 'Used to sort the Featured Events row.',
      hidden: ({document}) => !document?.featured,
      validation: (Rule) => Rule.integer().min(0),
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
      name: 'eventFile',
      title: 'Event File',
      type: 'file',
    },
    {
      name: 'description',
      title: 'Event Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'startDate',
      title: 'Start date',
      type: 'date',
      description: 'Upcoming events sort by this date.',
      options: {
        dateFormat: 'MM/DD/YYYY',
      },
      validation: (Rule) => requiredOnNewEvents(Rule),
    },
    {
      name: 'endDate',
      title: 'End date',
      type: 'date',
      options: {
        dateFormat: 'MM/DD/YYYY',
      },
      validation: (Rule) =>
        Rule.custom((endDate, context) => {
          const startDate = context.document?.startDate;
          if (!endDate || !startDate || endDate >= startDate) {
            return true;
          }

          return 'End date must be on or after the start date';
        }),
    },
    {
      name: 'scheduleLabel',
      title: 'Schedule label',
      type: 'string',
      description: 'Examples: "Every Thursday", "Sept. 7 – Nov. 26, 2026".',
    },
    {
      name: 'startTime',
      title: 'Start time',
      type: 'string',
      description: 'Examples: "1:30 PM", "3:00 PM", "12:00 NN".',
    },
    {
      name: 'endTime',
      title: 'End time',
      type: 'string',
      description: 'Examples: "1:30 PM", "3:00 PM", "12:00 NN".',
    },
    {
      name: 'dateandtime',
      title: 'Date and Time',
      type: 'array',
      description: 'Still read by the current calendar page.',
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
      description: 'Free-text detail for who can join. This is separate from Audience.',
      of: [{type: 'string'}],
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
      description: 'Examples: "Zoom (Online)", "Metro Manila", "Rizal Park, Manila".',
      validation: (Rule) => requiredOnNewEvents(Rule),
    },
    {
      name: 'district',
      title: 'District',
      type: 'string',
      description: 'Leave empty if this is not a district event.',
      options: {
        list: districtOptions,
      },
      validation: (Rule) =>
        Rule.custom((district, context) => {
          if (district && !districtOptions.some((option) => option.value === district)) {
            return 'Choose Luzon, Cebu, or Mindanao';
          }

          const area = context.document?.area;
          if (!area) {
            return true;
          }

          if (!district) {
            return 'Clear Area, or choose a district';
          }

          if (!areaBelongsToDistrict(district, area)) {
            return 'Choose an area in the selected district';
          }

          return true;
        }),
    },
    {
      name: 'area',
      title: 'Area',
      type: 'string',
      description: 'Leave empty for the whole district. The list follows the selected district.',
      options: {
        list: areaOptions,
      },
      hidden: ({document}) => !document?.district && !document?.area,
      inputComponent: AreaSelectInput,
      validation: (Rule) =>
        Rule.custom((area, context) => {
          if (!area) {
            return true;
          }

          const district = context.document?.district;
          if (!district) {
            return 'Choose a district, or clear this area';
          }

          if (!areaBelongsToDistrict(district, area)) {
            return 'Choose an area in the selected district';
          }

          return true;
        }),
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
      title: 'Map link',
      type: 'url',
      description: 'Optional map URL.',
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
      audience: 'audience',
      startDate: 'startDate',
      venue: 'venue',
    },
    prepare: ({title, poster, audience, startDate, venue}) => {
      const audienceTitle = audienceOptions.find((option) => option.value === audience)?.title;

      return {
        title,
        subtitle: [audienceTitle, startDate, venue].filter(Boolean).join(' · '),
        media: poster,
      };
    },
  },
};
