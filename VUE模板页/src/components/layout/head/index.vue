<template>
  <div class="myHeader">
    <div class="sidebarCollapse" @click="menuClick">
      <span :class="unfoldIcon"></span>
    </div>
    <div class="nav">
      <Breadcrumb />
    </div>
    <div class="rightDiv">
      <div class="search">
        <div class="iconBtn" @click="searchInputShow" v-waves:{type:center}>
          <svg-icon iconClass="search" />
        </div>
        <div :class="searchInputClass">
          <el-input
            class="inputSearh"
            v-model="searchInput"
            ref="searchInput"
            placeholder="请输入搜索内容"
            clearable
          ></el-input>
        </div>
      </div>
      <FullScreenBtn v-waves:{type:center} />
      <div class="userDiv" v-waves:{type:center}>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <div class="photoDiv">
              <el-avatar shape="square" :size="50" :src="photoUrl"></el-avatar>
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
              <span @click="logout">
                <i class="fa fa-sign-out"></i>
                登出
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/layout/breadcrumb";
import FullScreenBtn from "@/components/other/button/FullScreenBtn";
import waves from "@/directive/wave";

export default {
  components: {
    Breadcrumb,
    FullScreenBtn
  },
  directives: {
    waves
  },
  name: "Head",
  computed: {
    unfoldIcon() {
      if (this.$store.state.user.menuStatus) {
        return "el-icon-s-unfold";
      } else {
        return "el-icon-s-fold";
      }
    }
  },
  methods: {
    menuClick() {
      /*let state = this.$store.state.user.menuStatus;
      localStorage.setItem( "menu" , JSON.stringify({isCollapse:!state}));  */
      this.$store.dispatch("user/isCollapse");
    },
    searchInputShow() {
      if (this.searchInputClass == "searchInput") {
        this.$refs.searchInput.focus();
        this.searchInputClass = "searchInput showSearch";
      } else {
        this.searchInputClass = "searchInput";
      }
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login`);
    }
  },
  data() {
    return {
      photoUrl: require("@/assets/images/photo/cc.png"),
      searchInput: "",
      searchInputClass: "searchInput"
    };
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.sidebarCollapse {
  float: left;
  height: 100%;
  line-height: 82px;
  padding: 0 20px;
  cursor: pointer;
  span {
    font-size: 22px;
    color: #4f6272;
  }
}
.sidebarCollapse:hover {
  background: rgba(0, 0, 0, 0.025);
}
.nav {
  height: 100%;
  float: left;
}
.myHeader {
  width: 100%;
  height: 100%;
  flex-direction: column;
  .logoDiv {
    float: left;
    height: 100%;
    img {
      height: 100%;
    }
  }
  .rightDiv {
    float: right;
    height: 100%;
    display: flex;
    flex-direction: row;
    > div {
      cursor: pointer;
      line-height: 77px;
      font-size: 20px;
      margin-right: 5px;
      padding: 0 8px;
    }
    .search {
      padding: 0;
      display: flex;
      flex-direction: row;
      .iconBtn {
        margin: 0;
        padding: 0 8px;
      }
      .el-icon-search {
        font-weight: bold;
      }
      .searchInput {
        width: 0;
        transition: 0.4s all;
        overflow: hidden;
      }
    }
    .userDiv {
      color: #e0e0e0;
      padding: 0 10px;
      .el-dropdown {
        height: 100%;
        display: block;
        .el-dropdown-link {
          display: block;
          height: 100%;
          position: relative;
          padding-left: 54px;
          .photoDiv {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            height: 50px;
            width: 50px;
            border-radius: 15px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .nameDiv {
            font-size: 1rem;
            height: 100%;
            white-space: nowrap;
            line-height: 77px;
          }
        }
      }
    }
  }
}
.el-popper[x-placement^="bottom"] {
  margin-top: 0;
}
.showSearch {
  width: 240px !important;
  display: inline-block !important;
}
/deep/ .inputSearh input {
  height: 35px;
  line-height: 35px;
  border-radius: 0;
  border: 0 !important;
  border-bottom: 1px solid !important;
}
</style>
