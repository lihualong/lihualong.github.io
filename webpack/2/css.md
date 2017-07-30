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

# ![](/assets/QQ截图20170726112633.png)# 3css打包 {#3css}

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