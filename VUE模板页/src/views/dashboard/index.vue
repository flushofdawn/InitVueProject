<template>
  <div class="dashBody">
    <el-row :gutter="24">
      <el-col :span="6">
        <div class="grid-content divStyle">

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
      <el-col :span="24">
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
    methods: {
      initChart(){
        this.chart = this.echarts.init( this.$refs.myEchart );
        this.chart.setOption({
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          grid: {
            top: 10,
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '用户总量',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        });
      },
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
