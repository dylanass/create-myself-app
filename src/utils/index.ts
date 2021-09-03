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
 * @description 检查对象是否为空  （不会收 defineProperties 配置 enumerable 的影响）不考虑用Object.keys()也可
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

/**
 * 判断值是否错误 过滤掉0
 * @param {any} value
 * @returns {boolean}
 */
export const isFalsy = (value) => (value === 0 ? false : !value);

/**
 *
 * @param {any} value
 * @returns {boolean}
 */
export const isVoid = (value) => value === undefined || value === null || value === "";

/**
 * 去除对象中value为空(null,undefined,'')的属性
 * @param object
 * @returns {object}
 */
export const cleanObject = (object) => {
  // Object.assign({}, object)
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

/**
 * 获取文件后缀名
 * @param {String} filename
 */
export function getExt(filename) {
  if (typeof filename == "string") {
    return filename.split(".").pop().toLowerCase();
  } else {
    throw new Error("filename must be a string type");
  }
}

/**
 * 复制内容到剪贴板
 * @param value
 * @returns
 */
export function copyToBoard(value) {
  const element = document.createElement("textarea");
  document.body.appendChild(element);
  element.value = value;
  element.select();
  if (document.execCommand("copy")) {
    document.execCommand("copy");
    document.body.removeChild(element);
    return true;
  }
  document.body.removeChild(element);
  return false;
}

/**
 * 休眠xxxms
 * @param {Number} milliseconds
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
//使用方式
// const fetchData = async () => {
//   await sleep(1000);
// };

/**
 * 对象转化为formdata
 * @param {Object} object
 */

export function getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (Array.isArray(value)) {
      value.forEach((subValue, i) => formData.append(key + `[${i}]`, subValue));
    } else {
      formData.append(key, object[key]);
    }
  });
  return formData;
}
