import React from 'react';

import { FilterLink } from './FilterLink';

import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../../../reducer/todo/todoState';

export const FilterLinkList = ({
  filter
}) => (
  <div class="container">
    <br/>
    Show:{' '}
    <FilterLink filter={SHOW_ALL}
                currentFilter={filter}>All</FilterLink>
    {' '}
    <FilterLink filter={SHOW_ACTIVE}
                currentFilter={filter}>Active</FilterLink>
    {' '}
    <FilterLink filter={SHOW_COMPLETED}
                currentFilter={filter}>Completed</FilterLink>
    {' '}
  </div>
);
