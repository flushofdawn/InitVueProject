<template>
  <div class=" ">
    <el-row :gutter="24">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div>
            <i class=""></i>
          </div>
          <div>
            <p>干员</p>
            <p>{{ members }}</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="24" >
      <el-col :span="24">
        <div class="grid-content bg-purple">

        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      "members": 87,
      "money": 131571,
      "stone": 37,
      "energy": 103
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData:function(){
      var This=this;
      axios.get("../static/data/dashBoard.json", {}).then(function (response) {

      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row{
    margin-bottom: 15px;
  }
  .bg-purple{
    height: 50px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    color: #666;
    background-color: #ffffff;
    -webkit-box-shadow: 4px 4px 40px rgba(0,0,0,.05);
    box-shadow: 4px 4px 40px rgba(0,0,0,.05);
    border-color: rgba(0,0,0,.05);
  }
</style>
