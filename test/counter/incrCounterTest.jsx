/**
 * Created by mak on 6/28/16.
 */
import { incrCounter } from '../../src/reducer/counter/incrCounter';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

const incrCounterTest = () => {
  const befores = [0, 20, 10];
  const afters = [0, 21, 10];

  deepFreeze(befores);

  expect(
    incrCounter(befores, 1)
  ).toEqual(afters);
};

incrCounterTest();
