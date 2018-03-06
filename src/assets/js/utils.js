/**
 * 给 setTimeout 换个名字
 * @param {*} args  fn, time, ...args
 */
export const delay = (...args) => {
  // eslint-disable-next-line
  setTimeout.apply(null, args);
};

/**
 * 获取当前屏幕宽度
 */
export const getScreenWidth = () => document.documentElement.clientWidth;

/**
 * 得到当前屏幕的 rem 数值
 * @return {number} 当前屏幕的 rem 数值
 */
export const getRem = () => 100 * (getScreenWidth() / 375);

/**
 * 将 rem 单位转换为 px
 * @param {number} rem    rem 的数值
 * @return {number} 转换为 px 之后的数值
 */
export const rem2px = rem => rem * getRem();

/**
 * 将 px 单位转换为 rem
 * @param {number} px    px 的数值
 * @return {number} 转换为 rem 之后的数值
 */
export const px2rem = px => px / getRem();

