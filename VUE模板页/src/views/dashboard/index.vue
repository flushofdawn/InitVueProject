<template>
  <div class="dashBody">
    <el-row :gutter="24">
      <el-col :span="6">
        <div class="grid-content divStyle">
          <div class="">

          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content divStyle"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content divStyle"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content divStyle"></div>
      </el-col>
    </el-row>
    <el-row :gutter="24" >
      <el-col :span="12">
        <div class="grid-content divStyle echartMap1" ref="myEchart" id="map1">

        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Dashboard',
    data () {
      return {
        "members": 87,
        "money": 131571,
        "stone": 37,
        "energy": 103,
        "echart":null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    watch: {
      /* 监听getSidebarFold变化，解决echarts容器变化，重新渲染 setTimeout时间必须设置，且不能太短 */
      "$store.state.user.menuStatus" () {
        setTimeout(() => {
          this.resizeHandle()
        }, 450)
      }
    },
    methods: {
      initChart(){
        this.chart = this.$echarts.init( this.$refs.myEchart );
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value',
            splitLine :{
              show:false //隐藏或显示
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
              symbolSize:4, //折线点的大小
              areaStyle: {normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                    offset: 0, color: '#81befd' // 0% 处的颜色
                  },{
                    offset: 1, color: '#fff' // 100% 处的颜色
                  }]
                ),//线条渐变色
              }},
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
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
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
      resizeHandle () {
        this.chart.resize()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dashBody{
    /*padding: 10px;*/
  }
  .el-row{
    margin: 24px;
    margin-left: 8px !important;
    margin-right: 8px !important;
  }
  .el-col{
    padding-left: 14px !important;
    padding-right: 14px !important;
  }
  .divStyle{
    height: 200px;
    font-size: 12px;
    border-radius: 15px;
    position: relative;
    color: #666;
    background-color: #ffffff;
    -webkit-box-shadow: 4px 4px 40px rgba(0,0,0,.05);
    box-shadow: 4px 4px 40px rgba(0,0,0,.05);
    border-color: rgba(0,0,0,.05);
  }
  .echartMap1{
    height: 300px;
  }
</style>
