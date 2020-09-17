/**
 * Created by 朱颜辞镜花辞树 on 2020/4/27.
 */
import request from "@/utils/request";
export function getDashboardData(data) {
  return request({
    url: "/dashboardData",
    method: "post",
    data
  });
}
