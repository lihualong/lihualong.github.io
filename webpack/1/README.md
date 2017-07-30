# 什么是webpack

webpack是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。

![](/assets/161453372048661.jpg)

我们可以直接使用 require\(XXX\) 的形式来引入各模块，即使它们可能需要经过编译（比如JSX和sass），但我们无须在上面花费太多心思，因为 webpack 有着各种健全的加载器（loader）在默默处理这些事情

webpack的官网是[http://webpack.github.io/](http://webpack.github.io/)，文档地址是[http://webpack.github.io/docs/](http://webpack.github.io/docs/)，想对其进行更详细了解的可以点进去瞧一瞧。

## webpack的优势

其优势主要可以归类为如下几个：

1. webpack 是以 commonJS 的形式来书写脚本滴，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。

2. 能被模块化的不仅仅是 JS 了。

3. 开发便捷，能替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转base64等。

4. 扩展性强，插件机制完善，特别是支持 React 热插拔（见[react-hot-loader](https://github.com/gaearon/react-hot-loader)）的功能让人眼前一亮。

## webpack.config.js

每个项目下都必须配置有一个 webpack.config.js ，它的作用如同常规的 gulpfile.js/Gruntfile.js ，就是一个配置项，告诉 webpack 它需要做什么。

我们看看下方的示例：

```
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/js/page/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js/page',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        root: 'E:/github/flux-example/src', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
};
```

**Webpack的配置主要为了这几大项目：**

* entry：js入口源文件
* output：生成文件
* module：模块的加载的处理
* resolve：文件路径的指向
* plugins：插件，比loader更强大，能使用更多webpack的api



