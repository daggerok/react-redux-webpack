/**
 * Created by mak on 6/28/16.
 */
export const addTodo = (state = [], action) => {
  return [
    ...state,
    {
      id: action.id,
      text: action.text,
      completed: false
    }
  ];
};
