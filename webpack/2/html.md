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