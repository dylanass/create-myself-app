export const isDev: boolean = process.env.NODE_ENV === "development";

/**
 * 获取字符串分割长度
 * @param {string} str
 * @param {any} char
 * @returns {number}
 */
export const characterCount = (str, char) => str.split(char).length - 1;

/**
 * @constructor
 * @description 检查对象是否为空
 * @example
 * // return true
 * isEmpty({})
 * @example
 * // return false
 * isEmpty({note:'empty'})
 * @param {Object} obj
 * @returns {boolean}
 * @author Dylan <shiqi.cai@ecarxgroup.com>
 */
export const isEmpty = (obj) => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

/**
 * 等待一定时间后执行
 * @param {number} milliseconds
 * @returns {Promise}
 */
export const wait = async (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

/**
 * @description 获取两个日期之间的天差
 * @example
 * //return 950
 * daysBetween(new Date(2019-1-9),new Date(2021-8-16))
 * @param {Date} date1
 * @param {Date} date2
 * @returns {number}
 */
export const daysBetween = (date1, date2) =>
  Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

/**
 * @description 重定向到另一个 URL
 * @param url
 * @returns {undefined}
 */
export const redirect = (url) => (window.location.href = url);

/**
 * @description 打乱数组
 * @param {Array} arr
 * @returns
 */
export const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

/**
 * @description 在网页上获取选定的文本
 * @returns {string}
 */
export const getSelectedText = () => window.getSelection().toString();

/**
 * @description 获取一个随机的boolean
 * 如果要获取 70% 的false => Math.random() >= 0.7 ,以此类推
 * @returns {boolean}
 */
export const getRandomBoolean = () => Math.random() >= 0.5;

/**
 * @description 计算数组的平均值
 * @param {Array} arr
 * @returns {number}
 */
export const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;
