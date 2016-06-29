import { todos } from './todoReducer/todos';
import { filterTodo } from './todoReducer/filterTodo';
// using custom implementation (our own) combineReducers function
// import { combineReducers } from 'redux';
import { combineReducers } from './combineReducers';
export const todosDecorator = combineReducers({
  todos,
  filterTodo
});

/*
// simple combine reducers implementation:
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
