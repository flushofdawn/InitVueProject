<template>
  <div>
    <el-container  class="login">
      <el-header><Nav/></el-header>
      <el-main>
         <div class="loginDiv">
           <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
             <el-col :span="22" :offset="1">
               <div class="logoDiv">
                  <img class="" src="@/public/images/logo_login.png" />
               </div>
               <el-form-item prop="account">
                 <el-input v-model.number="ruleForm.account" placeholder="请输入账号" clearable></el-input>
               </el-form-item>
               <el-form-item prop="pass">
                 <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pass" autocomplete="off" clearable show-password></el-input>
               </el-form-item>
               <el-row :gutter="24">
                 <el-col :span="12">
                   <el-button class="loginBtn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
                 </el-col>
                 <el-col :span="12">
                   <el-button class="loginBtn" @click="resetForm('ruleForm')">重置</el-button>
                 </el-col>
               </el-row>
             </el-col>
           </el-form>
         </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  import Nav from '@/components/nav/nav';
  import TheGardenBg from '@/public/images/TheGardenBg/414569.png';
  export default {
    name: 'Login',
    components: {
      Nav
    },
    data() {
      var checkAccount = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }, 300);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('密码不能为空'));
        }
        setTimeout(() => {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }, 300);
      };

      return {
        msg: 'login',
        ruleForm: {
          pass: '',
          account: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          account: [
            { validator: checkAccount, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            sessionStorage.setItem("isLogin", true );
            window.location.hash="/index"
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  $backgroundColor: #000;
  .login{
    position: absolute;
    height: 100%;
    width: 100%;
    background: url("../../public/images/TheGardenBg/508468.jpg") no-repeat;
    background-size:100%;
    background-position:100%;
  }
  .el-header{
    background-color: $backgroundColor;
  }
  .el-main{
    padding: 0;
  }
  .loginDiv{
    width: 480px;
    padding: 20px 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
  }
  .logoDiv{
    text-align: center;
    padding: 20px 0;
    img{
      width: 80%;
    }
  }
  .loginBtn{
    width: 100%;
    margin: 0;
  }
</style>
