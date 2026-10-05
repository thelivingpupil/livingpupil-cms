import S from '@sanity/desk-tool/structure-builder';
import {FaFileAlt} from 'react-icons/fa';

const SINGLETON_TYPES = ['calendarPage'];

const calendarPage = S.listItem()
  .title('Calendar Page')
  .id('calendarPage')
  .icon(FaFileAlt)
  .child(
    S.document().schemaType('calendarPage').documentId('calendarPage').title('Calendar Page')
  );

export default () => {
  const items = [];

  S.documentTypeListItems().forEach((item) => {
    if (SINGLETON_TYPES.includes(item.getId())) {
      return;
    }

    items.push(item);

    if (item.getId() === 'events') {
      items.push(calendarPage);
    }
  });

  return S.list().title('Content').items(items);
};
