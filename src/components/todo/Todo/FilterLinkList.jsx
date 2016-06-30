import React from 'react';

import { FilterLink } from './FilterLink';

import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../../../reducer/todo/todoState';

export const FilterLinkList = () => (
  <div class="container">
    <br/>
    Show:{' '}
    <FilterLink targetFilter={SHOW_ALL}>All</FilterLink>{' '}
    <FilterLink targetFilter={SHOW_ACTIVE}>Active</FilterLink>{' '}
    <FilterLink targetFilter={SHOW_COMPLETED}>Completed</FilterLink>{' '}
  </div>
);
