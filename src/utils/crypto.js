const CryptoJS = require("crypto-js");

// 项目启动时，如无动态加密变量前端随机生成 （16位16进制数据）
// https://www.jisuan.mobi/p1H31N31z611NyWX.html
// http://www.ab126.com/system/10769.html

const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");
const iv = CryptoJS.enc.Utf8.parse("ABCDEF1234123412");

// 解密
export const Decrypt = (word) => {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
};

// 加密
export const Encrypt = (word) => {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString().toUpperCase();
};
