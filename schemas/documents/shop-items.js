import { FaShoppingCart } from 'react-icons/fa';

export default {
  name: 'shopItems',
  title: 'Shop Items',
  type: 'document',
  icon: FaShoppingCart,
  fields: [
    {
      name: 'code',
      title: 'Item Code',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Item Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Item Image',
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
      name: 'price',
      title: 'Item Price',
      type: 'number',
    },
  ],
};
