/**
 * Created by 朱颜辞镜花辞树 on 2020/4/27.
 */
import request from "@/utils/request"
export function login(data){
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
