import { createStore } from 'redux';

import { log, pretty } from '../../src/util';

/* // simple reducer
import { todos } from '../../src/reducer/todo/todoReducer/todos';

const store = createStore(todos);

store.dispatch({ type: 'ADD_TODO', id: 0, text: 'init' });
pretty(store.getState());

store.dispatch({ type: 'ADD_TODO', id: 1, text: 'continue' });
pretty(store.getState());

store.dispatch({ type: 'TOGGLE_TODO', id: 1 });
pretty(store.getState());
*/

// decorated reducer with filter functionality
import { todosDecorator } from '../../src/reducer/todo';

const store = createStore(todosDecorator);

store.dispatch({ type: 'ADD_TODO', id: 0, text: 'init' });
log(store.getState());

store.dispatch({ type: 'ADD_TODO', id: 1, text: 'continue' });
log(store.getState());

store.dispatch({ type: 'TOGGLE_TODO', id: 1 });
log(store.getState());

store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED' });
log(store.getState());
