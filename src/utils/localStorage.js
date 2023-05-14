import { Decrypt, Encrypt } from "./crypto";

import { newfxUserInfos, accessToken } from "./localName";
// 用户信息
export const setLocalStorageFxUserInfos = (data) =>
  localStorage.setItem(newfxUserInfos, Encrypt(JSON.stringify(data)));

export const getLocalStorageFxUserInfos = () =>
  localStorage.getItem(newfxUserInfos)
    ? JSON.parse(Decrypt(localStorage.getItem(newfxUserInfos)))
    : "";

// accessToken
export const setLocalAccessToken = (data) => {
  localStorage.setItem(accessToken, Encrypt(data));
};
export const getLocalAccessToken = () =>
  localStorage.getItem(accessToken)
    ? Decrypt(localStorage.getItem(accessToken))
    : "";

// 清除搜索缓存
export const clearAllStorage = async () => {
  localStorage.getItem(newfxUserInfos) &&
    localStorage.removeItem(newfxUserInfos);
  localStorage.getItem(accessToken) && localStorage.removeItem(accessToken);
};
