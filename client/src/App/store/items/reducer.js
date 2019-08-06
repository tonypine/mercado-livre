import produce from 'immer';

import ActionTypes from './types';

const initialState = {
  items: {}
};

const actions = (type, payload, state, draft) => {
  const actions = {
    [ActionTypes.GET_ITEMS]: () => {
      const { items } = payload;
      const newItems = {};

      items.forEach(item => {
        newItems[item.id] = item;
      });

      draft.items = newItems;
    },
    [ActionTypes.GET_ITEM]: () => {
      const { item } = payload;
      draft.items[item.id] = item;
    }
  };

  if (actions[type]) actions[type]();
};

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    actions(type, payload, state, draft);
  });
