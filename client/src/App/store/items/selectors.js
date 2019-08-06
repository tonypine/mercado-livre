import _ from 'lodash';

export const getItems = state => {
  return _.map(state.items.items, item => item);
};
export const getItem = (state, id) => state.items.items[id];
