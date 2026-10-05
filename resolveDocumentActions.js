import defaultResolve, {
  DeleteAction,
  DuplicateAction,
} from 'part:@sanity/base/document-actions';

const HIDDEN_SINGLETON_ACTIONS = new Set(
  [DeleteAction, DuplicateAction].filter(Boolean)
);

export default function resolveDocumentActions(props) {
  const actions = defaultResolve(props);

  if (props.type !== 'calendarPage') {
    return actions;
  }

  return actions.filter(
    (action) =>
      !HIDDEN_SINGLETON_ACTIONS.has(action) &&
      action.name !== 'DeleteAction' &&
      action.name !== 'DuplicateAction'
  );
}
