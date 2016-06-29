import React, { Component } from 'react';

import { addTodo } from '../../../store/todo';

const handleTodo = () => {
  if (input.value) {
    addTodo(input.value, id++);
    input.value = '';
  }
};
const onKeyPress=(event) => {
  if (13 === event.charCode) {
    handleTodo();
  }
};
let input = {};
let id = 0;

export const AddTodo = () => (
  <div class="container">
    <h4>add todo</h4>

    <div class="form-group">
      <label htmlFor="todo-text">enter todo text</label>
      <input id="todo-text"
             class="form-control"
             onKeyPress={(e) => {
               if (13 === e.charCode) {
                 handleTodo();
               }
             }}
             ref={node => { input = node; }}/>
    </div>

    <button class="btn btn-primary"
            onClick={handleTodo}>save todo
    </button>
  </div>
);
