let customBrowserVersion = () => {
  var u = navigator.userAgent;
  return {
    trident: u.indexOf("Trident") > -1, //IE内核
    presto: u.indexOf("Presto") > -1, //opera内核
    webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
    gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf("Android") > -1 || u.indexOf("Adr") > -1, //android终端
    iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
    iPad: u.indexOf("iPad") > -1, //是否iPad
    webApp: u.indexOf("Safari") == -1, //是否web应用程序，没有头部与底部
    weixin: u.indexOf("MicroMessenger") > -1, //是否微信 （2015-01-22新增）
    qq: u.match(/\sQQ/i) == " qq", //是否QQ
    isBaidu: u.indexOf("baiduboxapp") !== -1, //是否为百度浏览器
    isqqBrowser: u.indexOf("mqqbrowser") !== -1, //是否为qq浏览器
    isWxBrowser: u.indexOf("micromessenger") !== -1, //是否为微信浏览器
    isUc: u.indexOf("ucbrowser") !== -1, //是否为uc浏览器
  };
};
export let openLocationMap = (lng, lat, address) => {
  if (address && address != "") {
    if (customBrowserVersion().android) {
      window.location.href =
        "androidamap://viewMap?sourceApplication=appname&poiname=" +
        address +
        "&lat=" +
        lat +
        "&lon=" +
        lng +
        "&dev=0";
      setTimeout(() => {
        let hidden =
          window.document.hidden ||
          window.document.mozHidden ||
          window.document.msHidden ||
          window.document.webkitHidden;
        if (typeof hidden == "undefined" || hidden == false) {
          window.location.href =
            "https://uri.amap.com/marker?position=" +
            lng +
            "," +
            lat +
            "&name=" +
            address;
        }
      }, 2000);
    } else if (customBrowserVersion().ios) {
      window.location.href =
        "iosamap://viewMap?sourceApplication=appname&poiname=" +
        address +
        "&lat=" +
        lat +
        "&lon=" +
        lng +
        "&dev=0";
      //判断是否跳转
      setTimeout(() => {
        let hidden =
          window.document.hidden ||
          window.document.mozHidden ||
          window.document.msHidden ||
          window.document.webkitHidden;
        if (typeof hidden == "undefined" || hidden == false) {
          //调用高德地图
          window.location.href =
            "https://uri.amap.com/marker?position=" +
            lng +
            "," +
            lat +
            "&name=" +
            address;
        }
      }, 2000);
    }
  } else {
    alert("暂不知道该位置");
  }
};
