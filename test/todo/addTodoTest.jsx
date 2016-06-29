/**
 * Created by mak on 6/28/16.
 */
import { todos } from '../../src/reducer/todo/todoReducer/todos';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

const addTodoTest = () => {
  const befores = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'hi'
  };
  const afters = [{
    id: 0,
    text: 'hi',
    completed: false
  }];

  deepFreeze(befores);
  deepFreeze(action);

  expect(
    todos(befores, action)
  ).toEqual(afters);
};

addTodoTest();
