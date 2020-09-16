<template>
  <div class="dashBody">
    <el-row :gutter="24">
      <el-col :span="12">
        <div class="grid-content divStyle echartMap1">
          <line-charts :data="echart" />

        </div>
        <!--  <div
          class="grid-content divStyle echartMap1"
          ref="myEchart"
          id="map1"
        >

        </div> -->
      </el-col>
    </el-row>
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
  </div>

</template>

<script>
import axios from 'axios';
import LineCharts from '@/components/echarts/lineCharts';

export default {
  name: 'Dashboard',
  components: {
    LineCharts
  },
  data () {
    return {
      "members": '',
      "money": '',
      "stone": '',
      "energy": '',
      "echart": {},
    }
  },
  mounted () {

  },
  watch: {
    /* 监听getSidebarFold变化，解决echarts容器变化，重新渲染 setTimeout时间必须设置，且不能太短 */
    /* "$store.state.user.menuStatus" () {
      setTimeout(() => {
        this.resizeHandle()
      }, 450)
    } */
  },
  methods: {
    resizeHandle () {
      this.chart.resize()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashBody {
  /*padding: 10px;*/
}
.el-row {
  margin: 24px;
  margin-left: 8px !important;
  margin-right: 8px !important;
}
.el-col {
  padding-left: 14px !important;
  padding-right: 14px !important;
}
.divStyle {
  height: 200px;
  font-size: 12px;
  border-radius: 15px;
  position: relative;
  color: #666;
  background-color: #ffffff;
  -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
}
.echartMap1 {
  height: 300px;
}
</style>
