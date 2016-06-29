import { SET_VISIBILITY_FILTER } from '../todoType';
import { SHOW_ALL } from '../todoState';

export const filterTodo = (
  state = SHOW_ALL,
  action
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
