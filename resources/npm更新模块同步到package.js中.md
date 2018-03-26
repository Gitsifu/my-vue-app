# 模块检查更新

在用vue-cli生成工程后，一段时间很多模块都有更新，如何把工程中的模块都更新到最新的呢。
 
首先我们先通过命令查看下需要更新的版本：
```
npm outdated
```

npm outdated 会列出所有可更新的 node_modules，如下：

```
Package                             Current  Wanted  Latest  Location
autoprefixer                          6.7.2   6.7.2   7.1.2  vue-test
babel-core                           6.22.1  6.22.1  6.25.0  vue-test
babel-eslint                          7.1.1   7.1.1   7.2.3  vue-test
babel-loader                         6.2.10  6.2.10   7.1.1  vue-test
babel-plugin-transform-runtime       6.22.0  6.22.0  6.23.0  vue-test
babel-preset-env                      1.3.2   1.3.2   1.6.0  vue-test
babel-preset-stage-2                 6.22.0  6.22.0  6.24.1  vue-test
babel-register                       6.22.0  6.22.0  6.24.1  vue-test
chalk                                 1.1.3   1.1.3   2.0.1  vue-test
css-loader                           0.28.0  0.28.0  0.28.4  vue-test
element-ui                            1.3.7   1.3.7   1.4.1  vue-test
```
比如我的element-ui模块，当前是版本是1.3.7，而最新的版本，是1.4.1。 

但是执行
```
npm update
```
更新命令，只能按照package.js中标注的版本号，进行更新，所以每次都要改下package.js中的版本号为最新才能够更新，太麻烦，没什么用处。那还有没有更好的办法呢，当然有，就是高效升级插件npm-check-updates

安装方法
```
npm install -g npm-check-updates
```
查看最新的版本
```
npm-check-updates
```
```
ncu
```
下一个是指令缩写，更方便，执行后，会列出所有要更新的组件：
```
E:\Vue\vueAdmin-template-master>ncu
Using E:\Vue\vueAdmin-template-master\package.json
[..................] \ :
 element-ui                           1.3.7  →   1.4.1
 normalize.css                        3.0.2  →   7.0.0
 vue                                  2.3.3  →   2.4.2
 vue-router                           2.5.3  →   2.7.0
 autoprefixer                         6.7.2  →   7.1.2
 babel-core                          6.22.1  →  6.25.0
 babel-eslint                         7.1.1  →   7.2.3
 babel-loader                        6.2.10  →   7.1.1
 ```
升级

这说明有些包需要升级 这时候我们使用
```
ncu -a
```

就可以全部升级了。 

当然，如果所有包都是最新版本，执行ncu后会提示：

```
All dependencies match the latest package versions :)
```
