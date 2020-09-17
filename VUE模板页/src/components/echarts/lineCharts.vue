<template>
  <div
    :class="className"
    :style="{height:height,width:width}"
    :data="data"
  >
  </div>
</template>

<script>
import Echarts from "echarts";
import resize from './mixins/resize'
export default {
  name: 'LineCharts',
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    data: {
      type: Object,
      default: () => { }
    }
  },
  computed: {

  },
  /* mounted: function () {
    this.initChart()
  }, */
  watch: {
    data () {
      this.initChart()
    }
  },
  methods: {
    initChart () {
      const dataTit = (this.data.ydata ? this.data.ydata : []).map(it => {
        return it.title
      })
      this.chart = Echarts.init(this.$el);
      this.chart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: 25,
          top: 10,
          bottom: 20,
          data: ['用户总量', '视频广告']
        },
        grid: {
          top: "30",
          left: '10',
          right: '25',
          bottom: '30',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.data.xdata ? this.data.xdata : []
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false //隐藏或显示
          }
        },
        series: [
          {
            name: '用户总量',
            type: 'line',
            smooth: true,  //true 为平滑曲线，false为直线
            itemStyle: {
              normal: {
                color: "blue",
                lineStyle: {        // 系列级个性化折线样式
                  width: 2,
                  type: 'solid',
                  color: "#0180ff" //折线的颜色
                },
              }
            },
            symbolSize: 4, //折线点的大小
            areaStyle: {
              normal: {
                color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, color: '#81befd' // 0% 处的颜色
                }, {
                  offset: 1, color: '#fff' // 100% 处的颜色
                }]
                ),//线条渐变色
              }
            },
            data: [80, 122, 131, 214, 290, 220, 480]
          },
          {
            name: '视频广告',
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                color: '#8ec6ad',
                lineStyle: {        // 系列级个性化折线样式
                  width: 2,
                  type: 'solid',
                },
              },
            },//线条样式
            areaStyle: {
              color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#8ec6ad'
              }, {
                offset: 1,
                color: '#ffe'
              }])
            },
            data: [120, 232, 201, 154, 190, 330, 400]
          }
        ]
      });
    },
    resize () {
      this.chart.resize()
    }
  }
}
</script>

<style scoped>
</style>
