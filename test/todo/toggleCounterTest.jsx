/**
 * Created by mak on 6/28/16.
 */
import { toggleCounter } from '../../src/reducer/todo/toggleCounter';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
// import expect, { createSpy, spyOn, isSpy } from 'expect';

const toggleCounterTest = () => {
  const befores = { id: 0, completed: false };
  const afters = { id: 0, completed: true };

  deepFreeze(befores);
  expect(toggleCounter(befores, 1))
    .toEqual(afters);
};

toggleCounterTest();
