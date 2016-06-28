/**
 * Created by mak on 6/28/16.
 */
import { todos } from '../../src/reducer/todo';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
// import expect, { createSpy, spyOn, isSpy } from 'expect';

const toggleTodoTest = () => {
  const befores = [
    {
      id: 0,
      text: 'one',
      completed: false
    },
    {
      id: 1,
      text: 'two',
      completed: false
    }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };
  const afters = [
    {
      id: 0,
      text: 'one',
      completed: false
    },
    {
      id: 1,
      text: 'two',
      completed: true
    }
  ];

  deepFreeze(befores);
  deepFreeze(action);

  expect(
    todos(befores, action)
  ).toEqual(afters);
};

toggleTodoTest();
