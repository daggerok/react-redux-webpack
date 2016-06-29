import React from 'react';

import { store } from '../../../store/todo/index';
import { SET_VISIBILITY_FILTER } from '../../../reducer/todo/todoType';

export const FilterLink = ({
  filter,
  currentFilter,
  children
}) => {
  return (
    <a href="#"
       style={{ color: filter === currentFilter ? 'red' : '' }}
       onClick={e => {
         e.preventDefault();
         store.dispatch({
           type: SET_VISIBILITY_FILTER,
           filter
         });
       }}>{children}</a>
  );
};
