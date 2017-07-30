创建demo文件夹，之后的案例都写到这里，使用`npm init`    初始化项目，在`npm install webpack -g`   安装webpack。

根目录下创建`webpack.confing.js`

案例：

1. 单入口
2. 多入口
3. css
4. less
5. image
6. js压缩
7. html
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

