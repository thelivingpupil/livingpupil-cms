import {HiClipboardList} from "react-icons/hi";


export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: HiClipboardList,
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
