<template>
    <div class="myHeader">
      <div class="logoDiv">
        <img src="../../../public/images/nav/logo.png">
      </div>
      <div class="userDiv">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <div class="photoDiv">
              <img src="../../../public/images/photo/cc.png" />
            </div>
            <div class="nameDiv">
               c.c. 魔女<i class="el-icon-caret-bottom el-icon--right"></i>
            </div>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="fa fa-user-circle-o"></i>
              个人信息
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="fa fa-sign-out"></i>
              登出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
</template>

<script>
    //import someComponent from './someComponent'
    export default {
        name: "Head",
        data(){
            return {
                msg: "Hello Vue.js"
            }
        },
    }
</script>
<style  lang="scss" rel="stylesheet/scss" scoped>
  .myHeader{
    width: 100%;
    height: 100%;
    flex-direction: column;
    .logoDiv{
      float: left;
      height: 100%;
      img{
        height: 100%;
      }
    }
    .userDiv {
      float: right;
      height: 100%;
      color: #e0e0e0;
      cursor: pointer;
      .el-dropdown{
        height: 100%;
        display: block;
        .el-dropdown-link{
          display: block;
          height: 100%;
          position: relative;
          padding-left: 54px;
          .photoDiv{
            position: absolute;
            left: 0;
            top: 5px;
            height: 44px;
            width: 44px;
            border-radius: 50%;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .nameDiv{
            height: 100%;
            color: #FFF;
            white-space: nowrap;
            line-height: 54px;
          }
        }
      }
    }
  }
  .el-popper[x-placement^=bottom]{
    margin-top: 0;
  }
</style>
