/**
 * Created by 朱颜辞镜花辞树 on 2020/4/29.
 */

export function getToken() {
  return cookie.get("token");
}
export function setToken(token) {
  cookie.set("token",token,1);
}
export function removeToken(token) {
  cookie.delete("token");
}

export let cookie = {
  //参数分别是cookie的名称，cookie的值，cookie的有效时间
  set : function(key ,value, time) {
    let date = new Date();
    let expiresDays = time;
    date.setTime(date.getTime() + expiresDays * 24 * 3600 *1000);
    //这里是添加到已有的cookie中， 不要弄成+=
    document.cookie = key + '=' + value + ";expores=" + date.toTimeString();
  },
  get : function(key) {
    let getCookie = document.cookie.replace(/[ ]/g, "");
    let arrCookie = getCookie.split(";");
    let tips;
    for (let i = 0; i != arrCookie.length; i++) {
      let arr = arrCookie[i].split('=');
      if (key == arr[0]) {
        tips = arr[1];
        break;
      }
    }
    return tips;
  },
  delete : function(key) {
    let date = new Date();
    date.setTime(date.getTime()-10000000);
    document.cookie = key + '= ;expores=' + date.toTimeString();
  }
}
