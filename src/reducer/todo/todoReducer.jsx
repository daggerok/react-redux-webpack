import { todos } from './todoReducer/todos';
import { filterTodo } from './todoReducer/filterTodo';
import { combineReducers } from './combineReducers';

/*
// manual combine reducers (commented code replaced with next one):
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
*/ // let's implement our own combineReducers function
export const todosDecorator = combineReducers({
  todos,
  filterTodo
});
