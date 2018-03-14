<template>
  <div @keyup.enter="login">
    账号：<input type="text" v-model="loginForm.username"/><br>
    密码：<input type="password" v-model="loginForm.password"/><br>
    <button @click="login">登陆</button>
  </div>

</template>

<script>
  import ROLE_MAP from "../lib/roleMap";

  export default {
    name: 'login',
    components: {},
    props: [],
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      //登陆
      login: function () {
        let param = this.loginForm;
        //执行登陆请求，并将用户信息保存到session中
        /*this.$HTTP.post(this.$API.login,param,function (res) {

        })*/
        if ('admin' === param.username) {
          sessionStorage.role = ROLE_MAP['1'];
        } else {
          sessionStorage.role = ROLE_MAP['2'];
        }
        this.$router.push('/index')
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
