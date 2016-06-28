/**
 * Created by mak on 6/28/16.
 */
export const toggleTodo = (state = [], action) => {
  return state.map(todo => {
    if (todo.id === action.id) {
      // return Object.assign({}, todo, { completed: !todo.completed });
      return {
        ...todo,
        completed: !todo.completed
      };
    }
    return todo;
  });
};
