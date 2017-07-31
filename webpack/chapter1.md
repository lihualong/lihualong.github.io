创建demo文件夹，之后的案例都写到这里，使用`npm init`    初始化项目，在`npm install webpack -g`   安装webpack。

根目录下创建`webpack.confing.js`

案例：

1. [单入口](#1单入口)
2. [多入口](#2多入口)
3. [css](#3css)
4. [less](#4less)
5. [image](#5image)
6. [js压缩](#6js压缩)
7. [html](#7html)
8. jquery
9. extract
10. es6
11. gulp-webpack
12. 热更新
13. vue
14. 单页应用

# 1单入口 {#1单入口}

创建文件夹`1-单入口`    作为第一个案例的存储位置

![](/assets/QQ截图20170726105134.png)

> webpack通过入口文件进行打包，生成dist/dist.js文件，demo.html引用此文件

**demo.html:**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!--引用生成的文件-->
<script src="dist/dist.js"></script>
</body>
</html>
```

**common.js:**

```
module.exports.show=function () {
    alert('加载common');
}
```

**entry.js**

```
var common=require('./common.js');
common.show();
```

entry.js引入common.js，并且调用show方法

**1-单入口/webpack.config.js:**

```
module.exports = {
    entry: './1-单入口/src/entry.js',
    output: {
        filename: './1-单入口/dist/dist.js'
    }
};
```

配置编译的入口文件和编译后的输出文件，输出文件被demo.html引用

**根目录/webpack.config.js**

```
module.exports= require('./1-单入口/webpack.config')
```

**注：**

webpack运行默认是查找根目录下的webpack.config.js文件，我们要把多个案例写到一个项目里，所以具体配置在每个案例文件夹下，根目录的配置文件只负责调用。

**运行 webpack 命令：**

![](/assets/QQ截图20170726110240.png)

webpack已经编译成功，在1-单入口/dist下创建了dist.js文件，可以打开看看编译后的代码

这时我们就可以打开demo.html查看运行了

# 2多入口 {#2多入口}

![](/assets/QQ截图20170726110937.png)

> 多入口配置，用于生成多页应用的逻辑文件

**2-多入口/webpack.config.js:**

```
module.exports={
    /* 多入口，编译成多个文件
    *  build1、build2、build3为自定义入口名称
    * */
    entry:{
        build1:'./2-多入口/src/test1.js',
        build2:'./2-多入口/src/test2.js',
        build3:'./2-多入口/src/test3.js'
    },
    output:{
        // 生成的文件路径 [name]、[hash]为动态参数
        filename:'./2-多入口/dist/[name].[hash].js'
    }
}
```

**根目录/webpack.config.js:**

```
//module.exports= require('./1-单入口/webpack.config')
module.exports= require('./2-多入口/webpack.config')
```

后续的案例，根目录的配置都如此。

运行webpack

![](/assets/QQ截图20170726111359.png)

成功后在2-多入口/dist下生成了三个文件

# 3css打包 {#3css}

> css也作为模块进行编译，最终会在页面动态生成style标签

![](/assets/QQ截图20170726111848.png)

**style.css:**

```
body{
    background-color: blue;
    height:500px;
}
```

**entry.js:**

```
require('./style.css')
```

**demo.html:**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script src="./dist/main.js"></script>
</body>
</html>
```

**webpack.config.js**

```
module.exports = {
    entry: './3-css/src/entry.js',
    output: {
        /*输出的文件路径*/
        path: './3-css/dist',
        filename: 'main.js'
    },
    /*加载模块*/
    module: {
        /*loader配置*/
        loaders: [
            /*test为正则匹配模式
            * style-loader和css-loader为插件已自行安装
            * loader之间用！符号，按照顺序
            * */
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    }
}
```

编译css需要使用style-loader和css-loader，无需安装。

运行webpack查看结果。

# ![](/assets/QQ截图20170726112633.png)

# 4less {#4less}

先安装less和less-loader

```
npm install less --save
npm install less-loader --save
```

![](/assets/QQ截图20170726113410.png)

entry.js:

```
require('./index.less');
```

**index.less:**

```
@import "./common.less";
@import "./less1.less";
@import "./less2.less";
```

**common.less:**

```
body{
  font-size: 30px;
  font-family: "Microsoft YaHei";
}
@color:blue;
@bg-color:#ccc;
```

**less1.less:**

```
@import "common.less";
body{
  color:@color;
}
```

**less2.less:**

```
@import "./common.less";
body{
  background-color:@bg-color;
}
```

webpack.config.js

```
module.exports = {
    /*入口*/
    entry: './4-less/src/entry.js',
    /*输出*/
    output: {
        path: './4-less/dist',
        filename: 'app.js'
    },
    module: {
        /*loader配置*/
        loaders: [
            // 需要安装less-loader 、less
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
        ]
    }
}
```

less编译需要配合style-loader,css-loader

# 5image {#5image}

```
npm install url-loader --save
npm install file-loader --save
```

![](/assets/QQ截图20170726140023.png)

**imgs:**

* 1.jpg    23.79kb
* decrease\_1@2x.png   1.80kb
* discount\_1@2x.png   1.83kb
* mobile.jpg  138.39kb

可以自行找些图片

**entry.js:**

```
require('./page.less')
require('./image')
```

**image.js**

```
var img1 = document.createElement("img");
img1.src = require("./imgs/1.jpeg");//js操作图片，需要当做模块使用
document.body.appendChild(img1);
```

**page.less**

```
.decrease,.discount{
  background-size:100% 100% ;
  width: 20px;
  height: 20px;
  display: inline-block;
}
.bg(@name){
  background-image:url("imgs/@{name}_1@2x.png") ;
}
.decrease{
   .bg('decrease');
}
.discount{
  .bg('discount');
}
.box{
  width: 600px;
  height: 400px;
  background-image: url('imgs/mobile.jpg');
}
```

**demo.html:**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
  <div class="box">
  </div>
  <span class="decrease"></span>
  <span class="discount"></span>
  <script src="dist/output.js"></script>
</body>
</html>
```

**webpack.config.js:**

```
module.exports = {
    /*入口*/
    entry: './5-image/src/entry.js',
    /*输出*/
    output: {
        path: '5-image/dist',
        publicPath:'dist/',//资源的发布地址父路径，用于在代码中引用，如src、url()
        filename: 'output.js'
    },
    module: {
        /*loader配置*/
        loaders: [
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {
                test: /\.(png|jpg|jpeg)$/,
                //limit 字段代表图片打包限制，当图片大小小于限制时会自动转成 base64 码引用
                //&后面都是对生成文件的指定
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }

        ]
    }
}
```

图片编译会使用url-loader, limit指定一个大小，如果图片大于这个值之间复制到指定输出目录，小于则编译成dataurl

# 6js压缩 {#6js压缩}

> 使用UglifyJs对生成的代码压缩

**webpack.config.js:**

```
var webpack=require('webpack');
var uglify=webpack.optimize.UglifyJsPlugin
module.exports={
    entry:{
        build:'./6-js压缩/src/entry.js'
    },
    output:{
        filename:'./6-js压缩/dist/app.js'
    },
    /*插件*/
    plugins:[
        /*http://webpack.github.io/docs/list-of-plugins.html*/
        new uglify({
            compress: {
                warnings: false
            }
        })
    ]
}
```

js压缩需要使用webpack.optimize.UglifyJsPlugin，并且在配置plugins选项即可，更多配置可参考[http://webpack.github.io/docs/list-of-plugins.html\#uglifyjsplugin](http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin)

# 7html {#7html}

使用ejs作为html模板

```
npm install html-loader --save
npm install ejs-loader --save
```

[https://github.com/jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

![](/assets/QQ截图20170726164540.png)

**entry.js**

```
alert('编译成功')
```

**index.ejs:**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
   <%= require('./header.html')%>
   <%= require('./footer.html')%>
</body>
</html>
```

**header.html:**

```
<header>
    this is header
</header>
```

**footer.html:**

```
<footer>
    this is footer
</footer>
```

**webpack.config.js**

```
var htmlPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./7-html/src/entry.js',
    output:{
        filename:'./7-html/dist/app.js'
    },
    module: {
        loaders: [
            { //解析 .html
                test: /\.html$/,
                loader: 'html-loader'
            },
            { //解析 .ejs
                test: /\.ejs$/,
                loader: 'ejs-loader'
            }
        ]
    },
    plugins:[new htmlPlugin(
        {
            title: 'My App',
            filename: './7-html/dist/index.html',
            template:'./7-html/src/index.ejs',

        }
    )]
}
```

# 8jquery

> 项目中应用jquery，如果是使用模块化的方式引入，全局变量jquery和$都不可用，这时需要使用ProvidePlugin

![](/assets/QQ截图20170727113512.png)

**main.js:**

```
var jquery=require('./jquery.min');
jquery(function () {
    var div=$('<div></div>').appendTo('body');
    div.css({height:'100px',backgroundColor:'red'});
})
```

**demo.html:**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script src="./dist/app.js"></script>
</body>
</html>
```

**webpack.config.js:**

```
var webpack = require('webpack');
module.exports={
    entry:'./8-jquery/src/main.js',
    output:{
        filename:'./8-jquery/dist/app.js'
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        })
    ]
}
```

main.js里面引用了`var jquery=require('./jquery.min')` ，后续的代码应该使用jquery变量，如果使用$会报错的，这时我们配置jquery的全局变量如下即可

```
plugins:[
new webpack.ProvidePlugin({
$: 'jquery',
jQuery: 'jquery',
'window.jQuery': 'jquery',
'window.$': 'jquery',
})
]
```

# 9extract

> 在开发一些项目时，需要把样式文件独立到一个文件

![](/assets/QQ截图20170727122030.png)

entry.js:

```
require('./index.less');
```

index.less:

```
@bg-color:#ccc;
body{
  height: 1000px;
  background-color: @bg-color;
}
```

demo.html:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="dist/output.css">
</head>
<body>
 <ul>
     <li>
         npm install --save-dev extract-text-webpack-plugin
     </li>
 </ul>
 <script src="dist/output.js"></script>
</body>
</html>
```

webpack.config.js:

```
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './9-extract/src/entry.js',
    output: {
        path: './9-extract/dist',
        filename: 'output.js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/, 
                loader: ExtractTextPlugin.extract(["css-loader","less-loader"])
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin("output.css"),
    ]
}
```





