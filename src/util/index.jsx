export const log = (obj) => {
  console.log(JSON.stringify(obj));
};

export const pretty = (obj) => {
  console.log(JSON.stringify(obj, null, 2));
};
