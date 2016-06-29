/**
 * Created by mak on 6/28/16.
 */
import { rmCounter } from '../../src/reducer/counter/rmCounter';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

const rmCounterTest = () => {
  const befores = [0, 20, 10];
  const afters = [0, 10];

  deepFreeze(befores);

  expect(
    rmCounter(befores, 1)
  ).toEqual(afters);
};

rmCounterTest();
