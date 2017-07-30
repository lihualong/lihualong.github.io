在开始前，先要确认你已经安装[Node.js](https://nodejs.org/en/)的最新版本。使用 Node.js 最新的 LTS 版本，是理想的启动入口。使用旧版本，你可能遇到各种问题，因为它们可能缺少 webpack 功能或缺少相关 package 包。

### 本地安装 {#本地安装}

```
npm install webpack --save-dev

npm install webpack@<version> --save-dev
```

### 全局安装 {#全局安装}

不推荐全局安装 webpack。这会锁定 webpack 到指定版本，并且在使用不同的 webpack 版本的项目中可能会导致构建失败。

```
npm install webpack -g
```
### 运行 webpack

webpack 的执行也很简单，直接执行

`$ webpack --display-error-details`

即可，后面的参数“--display-error-details”是推荐加上的，方便出错时能查阅更详尽的信息（比如 webpack 寻找模块的过程），从而更好定位到问题。

其他主要的参数有：

* `webpack`最基本的启动webpack命令
* `webpack -w`提供watch方法，实时进行打包更新
* `webpack -p`对打包后的文件进行压缩
* `webpack -d`提供SourceMaps，方便调试
* `webpack --colors`输出结果带彩色，比如：会用红色显示耗时较长的步骤
* `webpack --profile`输出性能数据，可以看到每一步的耗时
* `webpack --display-modules`默认情况下 node\_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块





