# 基于角色的权限控制及vue-axios封装的前端vue开发简单模板

---
各种问题解决方案：(具体解决方案在项目的'./resources'文件中)

1.npm更新模块同步到package.js中

2.解决SpringMVC接收不到axios发送post请求的数据问题

----

## 一、如何运行：

1.安装依赖包
```
npm install
```
2.安装`json-server`
```
npm install -g json-server
```
3.运行:
```
npm run mockdev
```

启动项目后访问`http://localhost:8080`，使用账号为`admin`或者其他任何账号登陆查看效果（密码可以不填）

## 二、模拟数据：

1.全局安装`json-server`:

`npm install -g json-server`

2.项目根目录添加`mock/db.json`文件,并添加任意模拟数据
```
{
  "login": {
    "data": {
      "id": 1,
      "username": "admin",
      "password": "123456",
      "role": "1"
    },
    "code": "200",
    "msg": "登陆成功"
  }
}
```
3.package.json添加命令
```
    //启动模拟数据服务
    "mock": "json-server --watch mock/db.json",
    //启动模拟数据服务并启动此应用
    "mockdev": "npm run mock | npm run dev"
```


## 三、[axios](https://www.kancloud.cn/yunye/axios/234845)封装模块

后台传输过来的数据应该长这样：
```
{
  data: "",
  code: "",
  msg: ""
}
```
需要包含这三个数据，否则需要修改`./src/lib/httpRequest.js`中的代码

## 四、[js-cookie](https://www.npmjs.com/package/js-cookie)的使用

集成js-cookie
```
npm install --save js-cookie
```
如何使用

**方式一**：（**推荐**）

在`.vue`文件中使用`this.$Cookies`即可获取到全局的Cookies对象，直接调用此对象的set,get,remove等方法即可。

**方式二**：

在`.vue`文件的`<script></script>`中引入:
```
import Cookies from 'js-cookie';
```

创建一个cookie，在整个网站上有效：
```
Cookies.set('name','value');
```

创建一个7天到期的cookie
```
Cookies.set('name', 'value', { expires: 7 });
```

创建一个7天到期的cookie，对当前页面的路径有效：
```
Cookies.set('name', 'value', { expires: 7, path: '' });
```

获取cookie
```
Cookies.get('name');
```

获取所有可见的cookie
```
Cookies.get();
```

删除cookie
```
Cookies.remove('name');
```

## 五、更多相关资料

- [npm更新模块同步到package.js中](https://github.com/Gitsifu/my-vue-app/blob/master/resources/npm%E6%9B%B4%E6%96%B0%E6%A8%A1%E5%9D%97%E5%90%8C%E6%AD%A5%E5%88%B0package.js%E4%B8%AD.md)

- [解决SpringMVC接收不到axios发送post请求的数据问题](https://github.com/Gitsifu/my-vue-app/blob/master/resources/%E8%A7%A3%E5%86%B3SpringMVC%E6%8E%A5%E6%94%B6%E4%B8%8D%E5%88%B0axios%E5%8F%91%E9%80%81post%E8%AF%B7%E6%B1%82%E7%9A%84%E6%95%B0%E6%8D%AE%E9%97%AE%E9%A2%98.md)



