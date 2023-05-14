import { mgop } from "@aligov/jssdk-mgop";
let API_HOST = "https://mapi.zjzwfw.gov.cn/";
let MGOP_API = "mgop.h5.http.";
import { zlbConfigure } from "@/utils/utils";
import store from "@/store";

const fetchEndpoint = (
  dataJson = {
    url: "",
    method: "POST",
    data: {},
  }
) => {
  let api = MGOP_API + dataJson.url.split("/").join("");
  return new Promise((resolve, reject) => {
    mgop({
      api,
      host: API_HOST,
      dataType: "JSON",
      type: dataJson.method,
      data: dataJson.data ? dataJson.data : {},
      appKey: zlbConfigure.appKey,
      onSuccess: (res) => {
        if (res.data.errcode == 0) {
          resolve(res);
        } else if (res.data.errcode == 2001) {
          localStorage.clear();
          let gotoData = window.location.href.split("#")[1];
          let debug = store.state.debug;
          const sUserAgent = window.navigator.userAgent.toLowerCase();
          const bIsDtDreamApp = sUserAgent.indexOf("dtdreamweb") > -1; // 浙里办APP
          const bIsAlipayMini =
            sUserAgent.indexOf("miniprogram") > -1 &&
            sUserAgent.indexOf("alipay") > -1;
          if (bIsDtDreamApp) {
            window.location.href = `https://puser.zjzwfw.gov.cn/sso/mobile.do?action=oauth&scope=1&servicecode=${zlbConfigure.servicecode}&goto=${gotoData}&debug=${debug}`;
          } else if (bIsAlipayMini) {
            window.location.href = `https://puser.zjzwfw.gov.cn/sso/alipay.do?action=ssoLogin&servicecode=${zlbConfigure.servicecode}&goto=${gotoData}&debug=${debug}`;
          } else {
            window.location.href = `https://puser.zjzwfw.gov.cn/sso/mobile.do?action=oauth&scope=1&servicecode=${zlbConfigure.servicecode}&goto=${gotoData}&debug=${debug}`;
          }
        } else {
          reject(res);
        }
      },
      onFail: () => {
        let json = {
          data: {
            errmsg: "请求错误",
          },
        };
        reject(json);
      },
    });
  });
};

export default fetchEndpoint;
