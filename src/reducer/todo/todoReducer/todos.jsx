import {
  ADD_TODO,
  TOGGLE_TODO
} from '../todoType';
import { addTodo } from '../addTodo';
import { toggleTodo } from '../toggleTodo';

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case TOGGLE_TODO:
      return toggleTodo(state, action);
    default:
      return state;
  }
};
