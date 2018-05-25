<template>
  <div @keyup.enter="login">
    账号：<input type="text" v-model="loginForm.username"/><br>
    密码：<input type="password" v-model="loginForm.password"/><br>
    <button @click="login">登陆</button>
  </div>

</template>

<script>
  import ROLE_MAP from "../lib/roleMap";
  import NodeRSA from 'node-rsa'

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
      // let key = new NodeRSA({b: 512});//生成512位秘钥
      // let publicKey = key.exportKey('pkcs8-public');//导出公钥
      // let privateKey = key.exportKey('pkcs8-private');//导出私钥
      // console.log(publicKey)
      // console.log('=====')
      // console.log(privateKey)
      // publicKey = new NodeRSA(publicKey, 'pkcs8-public');//导入公钥
      // privateKey = new NodeRSA(privateKey, 'pkcs8-private');//导入私钥
      // console.log('----')
      // console.log(publicKey)
      // console.log('=====')
      // console.log(privateKey)



      const key = new NodeRSA({b: 512});

      const text = 'Hello RSA!';
      const encrypted = key.encrypt(text, 'base64');
      console.log('encrypted: ', encrypted);
      const decrypted = key.decrypt(encrypted, 'utf8');
      console.log('decrypted: ', decrypted);
    }
  }
</script>

<style scoped>

</style>
