<template>
  <div>
    <el-container>
      <el-header><Nav/></el-header>
      <el-main>
         <div class="loginDiv">

           <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
             <el-col :span="22" :offset="1">
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
  .el-header{
    background-color: $backgroundColor;
  }
  .el-main{
    padding: 0;
  }
  .loginDiv{
    width: 480px;
    border: 1px solid #666666;
    padding: 20px 0;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .loginBtn{
    width: 100%;
    margin: 0;
  }
</style>
