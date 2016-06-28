export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce( // get all keys of the reducers object (ie: todos and filterTodo): ['todos', 'filter']
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      {} // an initial nextState object before all key will proceeds
    );
  };
};
