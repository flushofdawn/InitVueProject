/**
 * Created by 朱颜辞镜花辞树 on 2020/4/27.
 */
import request from "@/utils/request";
export function login(data) {
  return request({
    url: "/user/login",
    method: "post",
    data
  });
}
export function getInfo(token) {
  return request({
    url: "/user/info",
    method: "get",
    params: { token }
  });
}
export function logout() {
  return request({
    url: "/user/logout",
    method: "post"
  });
}
export function resetToken() {
  return request({
    url: "/user/info",
    method: "get",
    params: { token }
  });
}
