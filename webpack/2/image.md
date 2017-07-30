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
