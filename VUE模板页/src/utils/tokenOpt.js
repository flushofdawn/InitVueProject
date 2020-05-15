/**
 * Created by 朱颜辞镜花辞树 on 2020/4/29.
 */
/*
  sessionStorage  在关闭页面后即被清空
       getItem      //取记录
       setIten      //设置记录
       removeItem   //移除记录
       key          //取key所对应的值
       clear        //清除记录
*/
/*
  规定 sessionStorage 格式
  {
    token:'',
  }
*/
export function getToken() {
  return window.sessionStorage.getItem("token");
}
export function setToken(token) {
  console.log( token )
  window.sessionStorage.setToken("token",token);
}
