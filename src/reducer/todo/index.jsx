/**
 * Created by mak on 6/28/16.
 */
import { addTodo } from './addTodo';
import { toggleTodo } from './toggleTodo';
import { filterTodo } from './filterTodo';

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state, action);
    case 'TOGGLE_TODO':
      return toggleTodo(state, action);
    default:
      return state;
  }
};

/* // manual combine reducers (commented code replaced with next one):
export const todosDecorator = (state = {}, action) => {
  return {
    todos: todos(
      state.todos,
      action
    ),
    filterTodo: filterTodo(
      state.filterTodo,
      action
    )
  }
};
*/
/* // let's implement our own combineReducers function
import { combineReducers } from 'redux';
*/
import { combineReducers } from './combineReducers';
export const todosDecorator = combineReducers({
  todos,
  filterTodo
});
