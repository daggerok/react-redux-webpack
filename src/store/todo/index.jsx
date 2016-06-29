import { createStore } from 'redux';
import { todosDecorator } from '../../reducer/todo';
import { ADD_TODO, TOGGLE_TODO } from '../../reducer/todo/todoType';

export const store = createStore(todosDecorator);

export const addTodo = (text, id) => store.dispatch({
  type: ADD_TODO,
  text: text,
  id: id
});

export const completeTodo = (id) => store.dispatch({
  type: TOGGLE_TODO,
  id: id
});
