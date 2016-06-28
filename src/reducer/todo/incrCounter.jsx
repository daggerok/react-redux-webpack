/**
 * Created by mak on 6/28/16.
 */
export const incrCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};
