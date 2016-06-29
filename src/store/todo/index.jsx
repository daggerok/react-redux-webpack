import { createStore } from 'redux';

import { todosDecorator } from '../../reducer/todo';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from '../../reducer/todo/todoType';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../../reducer/todo/todoState';

export const store = createStore(todosDecorator);

export const subscribe = (methodRef) => store.subscribe(methodRef);

export const unsubscribe = (methodRef) => store.unsubscribe(methodRef);

export const todos = () => store.getState().todos;

export const filter = () => store.getState().filterTodo;

export const filterTodos = (filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos();
    case SHOW_ACTIVE:
      return todos().filter(todo => !todo.completed);
    case SHOW_COMPLETED:
      return todos().filter(todo => todo.completed);
    default:
      return todos();
  }
};

export const addTodo = (text, id) => store.dispatch({
  type: ADD_TODO,
  text: text,
  id: id
});

export const completeTodo = (id) => store.dispatch({
  type: TOGGLE_TODO,
  id: id
});

export const setVisibilityFilter = (filter) => store.dispatch({
  type: SET_VISIBILITY_FILTER,
  filter
});
