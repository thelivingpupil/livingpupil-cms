import {HiBookOpen} from "react-icons/hi";


export default {
  name: 'program',
  title: 'Program',
  type: 'document',
  icon: HiBookOpen,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
