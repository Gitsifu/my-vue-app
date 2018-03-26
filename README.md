# 基于角色的权限控制及vue-axios封装的前端vue开发简单模板

启动项目后访问`http://localhost:8080`，使用账号为`admin`或者其他任何账号登陆查看效果（密码可以不填）

# 模拟数据：

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
