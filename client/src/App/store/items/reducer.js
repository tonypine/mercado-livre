import produce from 'immer';

import ActionTypes from './types';

const initialState = {
  items: {},
  selectedItem: null,
  categories: []
};

const actions = (type, payload, state, draft) => {
  const actions = {
    [ActionTypes.GET_ITEMS]: () => {
      const { items, categories } = payload;
      const newItems = {};

      items.forEach(item => {
        newItems[item.id] = item;
      });

      draft.items = newItems;
      draft.categories = categories;
    },
    [ActionTypes.GET_ITEM]: () => {
      const { item, categories } = payload;
      draft.selectedItem = item;
      draft.categories = categories;
    }
  };

  if (actions[type]) actions[type]();
};

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    actions(type, payload, state, draft);
  });
