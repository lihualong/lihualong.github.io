# 加载器\(Loaders\) {#加载器(Loaders)}

loader 是对应用程序中资源文件进行转换。它们是（运行在 Node.js 中的）函数，可以将资源文件作为参数的来源，然后返回新的资源文件。

例如，你可以使用 loader 告诉 webpack 加载 CSS 文件，或者将 TypeScript 转为 JavaScript。首先，安装相对应的 loader：

```
npm install --save-dev css-loader
npm install --save-dev ts-loader
```

其次，配置`webpack.config.js`，对每个`.css`文件使用[`css-loader`](http://www.css88.com/doc/webpack2/loaders/css-loader)，然后类似地，对每个`.ts`文件使用`ts-loader`：

**webpack.config.js**

```
module.exports = {
  module: {
    rules: [
      {test: /\.css$/, use: ['css-loader'](/loaders/css-loader)},
      {test: /\.ts$/, use: ['ts-loader'](https://github.com/TypeStrong/ts-loader)}
    ]
  }
};
```

## 配置 {#配置}

在你的应用程序中，有三种方式使用 loader：

* 通过配置
* 在`require`语句中显示使用
* 通过 CLI

### 通过`webpack.config.js` {#通过-webpackconfigjs}

`module.loaders`允许你在 webpack 配置中指定几个 loader。

这是展示 loader 的一种简明的方式，并且有助于简洁代码，以及对每个相应的 loader 有一个完整的概述。

```

module.exports = {
    entry: './src/entry.js',
    output: {
        path: './dist',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
        ]
    }
}
```

### 通过`require` {#通过-require}

可以在`require`语句（或`define`,`require.ensure`, 等语句）中指定 loader。使用`!`将资源中的 loader 分开。分开的每个部分都相对于当前目录解析。

```
require('style-loader!css-loader?modules!./styles.css');
```

通过前置所有规则及使用`!`，可以对应覆盖到配置中的任意 loader。

选项可以传递查询参数，就像在 web 中那样（`?key=value&foo=bar`）。也可以使用 JSON 对象（`?{"key":"value","foo":"bar"}`）。

 尽可能使用`module.loaders`，因为这样可以在源码中减少引用，并且可以更快调试和定位 loader，避免代码越来越糟。

### 通过 CLI {#通过-cli}

可选项，你也可以通过 CLI 使用 loader：

```
webpack --module-bind jade --module-bind 'css=style!css'
```

这会对`.jade`文件使用`jade-loader`，对`.css`文件使用[`style-loader`](http://www.css88.com/doc/webpack2/loaders/style-loader)和[`css-loader`](http://www.css88.com/doc/webpack2/loaders/css-loader)。

