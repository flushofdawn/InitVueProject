/**
 * Created by 朱颜辞镜花辞树 on 2020/4/28.
 */
export default [
  // user login
  {
    url: "/dashboardData",
    type: "post",
    response: () => {
      return {
        code: 20000,
        data: {
          members: 87,
          money: 131571,
          stone: 37,
          energy: 103,
          lineCharts: {
            xdata: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            ydata: [
              { title: "用户总量", data: [80, 122, 131, 214, 290, 220, 480] },
              { title: "视频广告", data: [120, 232, 201, 154, 190, 330, 400] }
            ]
          }
        }
      };
    }
  }
];
