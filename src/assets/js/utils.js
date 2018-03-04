/**
 * 给 setTimeout 换个名字
 * @param {*} args  fn, time, ...args
 */
export const delay = (...args) => {
  // eslint-disable-next-line
  setTimeout.apply(null, args);
};

