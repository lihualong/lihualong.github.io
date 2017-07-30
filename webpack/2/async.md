# require.ensure {#代码分割 - 使用 require.ensure}

webpack ensure有人称它为异步加载，也有人说做代码切割，那这 个家伙到底是用来干嘛的？其实说白了，它就是把js模块给独立导出一个.js文件的，然后使用这个 模块的时候，webpack会构造script dom元素，由浏览器发起异步请求这个js文件。

语法如下：

```
require.ensure(dependencies: String[], callback: function(require), chunkName: String)
```

#### 依赖 dependencies {#依赖-dependencies}

这是一个字符串数组，通过这个参数，在所有的回调函数的代码被执行前，我们可以将所有需要用到的模块进行声明。

#### 回调 callback {#回调-callback}

当所有的依赖都加载完成后，webpack会执行这个回调函数。`require`对象的一个实现会作为一个参数传递给这个回调函数。因此，我们可以进一步`require()`依赖和其它模块提供下一步的执行。

#### chunk名称 chunkName {#chunk名称-chunkname}

chunkName 是提供给这个特定的`require.ensure()`的 chunk 的名称。通过提供`require.ensure()`不同执行点相同的名称，我们可以保证所有的依赖都会一起放进相同的 文件束\(bundle\)。

#### 案例

我们使用Vue开发项目时，异步组件就是使用require.ensure\(\)实现的，我们用实例来实现vue的异步加载。

页面中有两个超链接，指向不同的路由地址，点击后异步加载不同的模块

![](/assets/QQ截图20170729150846.png)

**main.js**

```
var as = document.querySelectorAll('a')
for (var i = 0; i < as.length; i++) {
    as[i].onclick = function () {
        if (window.location.hash === '#/home') {
            require.ensure([], function (require) {
                require('./home.js').show();
            });
        } else if (window.location.hash === '#/user') {
            require.ensure([], function (require) {
                require('./user.js').show();
            });
        }
    }
}
```

home.js

```
module.exports={
    show(){
        alert('async loading home')
    }
}
```

user.js

```
module.exports={
    show(){
        alert('async loading home')
    }
}
```

index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<a href="#/home">home</a>
<a href="#/user">user</a>
</body>
</html>
```

webpack.config.js

```
var path=require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:{
        app:'./13-async/src/main.js'
    },
    output:{
        path: path.resolve(__dirname, './dist/'),
        publicPath: './',
        filename: '[name].js'
    },
    module:{
        loaders:[
            { //解析 .html
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:'./13-async/src/index.html',
        })
    ]
}
```

编译后会在dist文件生成多个文件

![](/assets/QQ截图20170729154021.png)

