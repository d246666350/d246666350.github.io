/**
 * @author qiuyuhao
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
export let isExternal = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path);
};

/**
 * @author qiuyuhao
 * @description 校验密码是否小于6位
 * @param value
 * @returns {boolean}
 */
export let isPassword = (value) => {
  return value.length >= 6;
};

/**
 * @author qiuyuhao
 * @description 判断是否为数字
 * @param value
 * @returns {boolean}
 */
export let isNumber = (value) => {
  const reg = /^[0-9]*$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断是否是名称
 * @param value
 * @returns {boolean}
 */
export let isName = (value) => {
  const reg = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断是否为IP
 * @param ip
 * @returns {boolean}
 */
export let isIP = (ip) => {
  const reg =
    /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return reg.test(ip);
};

/**
 * @author qiuyuhao
 * @description 判断是否是传统网站
 * @param url
 * @returns {boolean}
 */
export let isUrl = (url) => {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
};

/**
 * @author qiuyuhao
 * @description 判断是否是小写字母
 * @param value
 * @returns {boolean}
 */
export let isLowerCase = (value) => {
  const reg = /^[a-z]+$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断是否是大写字母
 * @param value
 * @returns {boolean}
 */
export let isUpperCase = (value) => {
  const reg = /^[A-Z]+$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断是否是大写字母开头
 * @param value
 * @returns {boolean}
 */
export let isAlphabets = (value) => {
  const reg = /^[A-Za-z]+$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断是否是字符串
 * @param value
 * @returns {boolean}
 */
export let isString = (value) => {
  return typeof value === "string" || value instanceof String;
};

/**
 * @author qiuyuhao
 * @description 判断是否是数组
 * @param arg
 * @returns {arg is any[]|boolean}
 */
export let isArray = (arg) => {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
};

/**
 * @author qiuyuhao
 * @description 判断是否是端口号
 * @param value
 * @returns {boolean}
 */
export let isPort = (value) => {
  const reg =
    /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断是否是手机号
 * @param value
 * @returns {boolean}
 */
export let isPhone = (value) => {
  const reg = /^1\d{10}$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断是否是身份证号(第二代)
 * @param value
 * @returns {boolean}
 */
export let isIdCard = (value) => {
  const reg =
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断是否是邮箱
 * @param value
 * @returns {boolean}
 */
export let isEmail = (value) => {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断是否中文
 * @param value
 * @returns {boolean}
 */
export let isChina = (value) => {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断是否为空
 * @param value
 * @returns {boolean}
 */
export let isBlank = (value) => {
  return (
    value == null ||
    false ||
    value === "" ||
    value.trim() === "" ||
    value.toLocaleLowerCase().trim() === "null"
  );
};

/**
 * @author qiuyuhao
 * @description 判断是否为固话
 * @param value
 * @returns {boolean}
 */
export let isTel = (value) => {
  const reg =
    /^(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})([- ])?)?([0-9]{7,8})(([- 转])*([0-9]{1,4}))?$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断是否为数字且最多两位小数
 * @param value
 * @returns {boolean}
 */
export let isNum = (value) => {
  const reg = /^\d+(\.\d{1,2})?$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断经度 -180.0～+180.0（整数部分为0～180，必须输入1到5位小数）
 * @param value
 * @returns {boolean}
 */
export let isLongitude = (value) => {
  const reg = /^[-|+]?(0?\d{1,2}\.\d{1,5}|1[0-7]?\d{1}\.\d{1,5}|180\.0{1,5})$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断纬度 -90.0～+90.0（整数部分为0～90，必须输入1到5位小数）
 * @param value
 * @returns {boolean}
 */
export let isLatitude = (value) => {
  const reg = /^[-|+]?([0-8]?\d{1}\.\d{1,5}|90\.0{1,5})$/;
  return reg.test(value);
};

/**
 * @author qiuyuhao
 * @description rtsp校验，只要有rtsp://
 * @param value
 * @returns {boolean}
 */
export let isRTSP = (value) => {
  const reg =
    /^rtsp:\/\/([a-z]{0,10}:.{0,10}@)?(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  const reg1 =
    /^rtsp:\/\/([a-z]{0,10}:.{0,10}@)?(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]):[0-9]{1,5}/;
  const reg2 =
    /^rtsp:\/\/([a-z]{0,10}:.{0,10}@)?(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\//;
  return reg.test(value) || reg1.test(value) || reg2.test(value);
};

/**
 * @author qiuyuhao
 * @description 判断是否为json
 * @param value
 * @returns {boolean}
 */
export let isJson = (value) => {
  if (typeof value == "string") {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == "object" && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
};
