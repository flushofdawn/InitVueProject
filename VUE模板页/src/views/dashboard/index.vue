<template>
  <div class="dashBody">
    <el-row :gutter="24">
      <el-col :span="12">
        <div class="grid-content divStyle echartMap1">
          <line-charts
            :data="lineCharts"
            :style="{height:'100%',width:'100%'}"
          />

        </div>
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
import { getDashboardData } from '@/api/dashboard';

export default {
  name: 'Dashboard',
  components: {
    LineCharts
  },
  data () {
    return {
      members: '',
      money: '',
      stone: '',
      energy: '',
      lineCharts: {},
    }
  },
  mounted () {
    this.initPage()
  },
  methods: {
    initPage () {
      getDashboardData().then(response => {
        const { data } = response;
        this.members = data.members;
        this.money = data.money;
        this.stone = data.stone;
        this.energy = data.energy;
        this.lineCharts = data.lineCharts;
      });
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
