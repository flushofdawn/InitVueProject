/**
 * Created by 朱颜辞镜花辞树 on 2020/4/27.
 */
import request from "@/utils/request"
export function generateRoutes(data){
  return request({
    url: '/routes',
    method: 'get',
    data
  })
}
