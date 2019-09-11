在项目中需要用到axios与后端接口交互的时候，使用POST请求时，后台接收不到前台传的数据 

js代码如下:

```
let params = {
  username: '123',
  password: '123456'
}
axios.post(`/user/login`, params);
```

解决如下: 
方法一 ：在项目中安装qs库作为格式化的依赖：
```
npm install qs --save-dev 
```
修改js代码:
```
import qs from 'qs'
let params = {
  username: '123',
  password: '123456'
}
axios.post(`/user/login`, qs.stringify(params));
```

方法二：如果不想修改前端代码的话，需要对后台的代码做修改： 

通过翻看axios的文档得知：在axios使用Post发送数据时，默认是直接把json放到请求体中提交到后端的，而后端获取数据的方式有两种，

一种是@RequestParam（通过字符串中解析出参数）,

另一种是@ResponseBody（从请求体中取参数），很显然，我们的后端用了第一种方式。
