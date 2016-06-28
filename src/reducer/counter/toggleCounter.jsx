/**
 * Created by mak on 6/28/16.
 */
export const toggleCounter = (todo) => {
  // return Object.assign({}, todo, { completed: !todo.completed });
  return {
    ...todo,
    completed: !todo.completed
  };
};
