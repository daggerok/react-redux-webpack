import { createStore } from 'redux';
import { todosDecorator } from '../../reducer/todo';
import { TOGGLE_TODO } from '../../reducer/todo/todoType';

export const store = createStore(todosDecorator);

export const completeTodo = (id) => store.dispatch({
  type: TOGGLE_TODO,
  id: id
});
