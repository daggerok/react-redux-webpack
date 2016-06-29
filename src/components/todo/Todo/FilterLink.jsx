import React from 'react';

import { setVisibilityFilter } from '../../../store/todo/index';

export const FilterLink = ({
  filter,
  currentFilter,
  children
}) => {
  return (
    <a href="#"
       style={{
         color: filter === currentFilter ? 'red' : ''
       }}
       onClick={e => {
         e.preventDefault();
         setVisibilityFilter(filter);
       }}>
      {children}
    </a>
  );
};
