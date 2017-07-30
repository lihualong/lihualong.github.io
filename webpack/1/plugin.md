# 插件\(Plugins\) {#插件(Plugins)}

插件是 wepback 的[支柱](https://github.com/webpack/tapable)功能。在你使用 webpack 配置时，webpack 自身也构建于**同样的插件系统**上！

插件目的在于解决[loader](http://www.css88.com/doc/webpack2/concepts/loaders)无法实现的**其他事**。

## 剖析 {#剖析}

webpack**插件**是一个具有[`apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)属性的 JavaScript 对象。`apply`属性会被 webpack compiler 调用，并且 compiler 对象可在**整个**compilation 生命周期访问。

**ConsoleLogOnBuildWebpackPlugin.js**

```
function ConsoleLogOnBuildWebpackPlugin() {

};

ConsoleLogOnBuildWebpackPlugin.prototype.apply = function(compiler) {
  compiler.plugin('run', function(compiler, callback) {
    console.log("webpack 构建过程开始！！！");

    callback();
  });
};
```

作为一个聪明的 JavaScript 开发者，你可能还记得`Function.prototype.apply`方法。通过这个方法你可以把任意函数作为插件传递（`this`将指向`compiler`）。你可以在配置中使用这样的方式来内联自定义插件。

## 用法 {#用法}

由于**plugin**可以携带参数/选项，你必须在 wepback 配置中，向`plugins`属性传入`new`实例。

根据你如何使用 webpack，这里有多种方式使用插件。

### 配置 {#配置}

**webpack.config.js**

```
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```



