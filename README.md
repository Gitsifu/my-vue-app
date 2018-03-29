# 基于角色的权限控制及vue-axios封装的前端vue开发简单模板
## 如何运行：

安装依赖包
```
npm install
```

运行:

```
npm run mockdev
```

启动项目后访问`http://localhost:8080`，使用账号为`admin`或者其他任何账号登陆查看效果（密码可以不填）

## 模拟数据：

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


## axios封装模块

后台传输过来的数据应该长这样：
```
{
  data: "",
  code: "",
  msg: ""
}
```
需要包含这三个数据，否则需要修改`./src/lib/httpRequest.js`中的代码

## [js-cookie](https://www.npmjs.com/package/js-cookie)的使用

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



> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
