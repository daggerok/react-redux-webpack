import { createStore } from 'redux';
import { todosDecorator, ADD_TODO } from '../../reducer/todo';

export const store = createStore(todosDecorator);
