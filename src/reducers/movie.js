import { GET_LIST, GET_DETAILS } from '../actions';

export default (state = { list: [], params: { limit: 20 }, details: {} }, action) => {
  const { type, list, details } = action;

  switch (type) {
  case GET_LIST:
    return Object.assign({}, state, {
      list
    });
  case GET_DETAILS:
    return Object.assign({}, state, {
      details
    });
  default:
    return state;
  }
};