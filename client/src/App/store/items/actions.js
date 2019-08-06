import axios from 'axios';
import ActionTypes from './types';

export const fetchItems = query => async dispatch => {
  const { data } = await axios.get(`items?q=${query}`);

  dispatch({
    type: ActionTypes.GET_ITEMS,
    payload: data
  });
};

export const fetchItem = id => async dispatch => {
  const { data } = await axios.get(`items/${id}`);
  dispatch({
    type: ActionTypes.GET_ITEM,
    payload: data
  });
};
