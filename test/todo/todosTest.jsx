/**
 * Created by mak on 6/28/16.
 */
import { todos } from '../../src/reducer/todo/todos';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
// import expect, { createSpy, spyOn, isSpy } from 'expect';

const todosTest = () => {
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
  expect(todos(befores, action))
    .toEqual(afters);
};

todosTest();
