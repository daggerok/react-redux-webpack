/**
 * Created by mak on 6/28/16.
 */
import { addCounter } from '../../src/reducer/counter/addCounter';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
// import expect, { createSpy, spyOn, isSpy } from 'expect';

const addCounterTest = () => {
  const befores = [];
  const afters = [0];

  deepFreeze(befores);

  expect(
    addCounter(befores)
  ).toEqual(afters);
};

addCounterTest();
