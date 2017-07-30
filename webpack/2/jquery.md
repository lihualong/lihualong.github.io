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