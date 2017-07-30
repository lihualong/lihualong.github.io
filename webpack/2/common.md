# CommonsChunkPlugin {#commonschunkplugin}

```
new webpack.optimize.CommonsChunkPlugin(options)
```

`CommonsChunkPlugin`插件，是一个可选的用于建立一个独立文件\(又称作 chunk\)的功能，这个文件包括多个入口`chunk`

的公共模块。通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。

### 配置

> options.name或options.names（string \| string \[\]）：公共块的块名称。 可以通过传递现有块的名称来选择现有块。 如果传递一个字符串数组，这等于为每个块名称多次调用插件。 如果省略并且options.async或options.children设置为所有块，则使用options.filename作为块名。
>
> options.filename（string）：公共块的文件名模板。 可以包含与output.filename相同的占位符。 如果省略，原始文件名不会被修改（通常为output.filename或output.chunkFilename）。
>
> options.minChunks（number \| Infinity \| function（module，count） - &gt; boolean）：在移动到公共块之前需要包含一个模块的块的最小数量。 该数字必须大于或等于2且小于或等于块的数量。 传递无限只是创建公共块，但不移动模块。 通过提供一个函数，你可以添加自定义逻辑。 （默认为块的数量）
>
> options.chunks（string \[\]）：按块名称选择源块。 块必须是公共块的子节点。 如果省略，则选择所有条目块。
>
> options.children（boolean）：如果true，则选择公共块的所有子节点
>
> options.async（boolean \| string）：如果为true，将创建一个新的异步公共块作为options.name的子节点和options.chunks的子节点。 它与options.chunks并行加载。 可以通过提供所需的字符串而不是true来更改输出文件的名称。
>
> options.minSize（number）：创建公共块之前所有公共模块的最小大小。

### 案例：

![](/assets/QQ截图20170729180302.png)

**base.js**

```
module.exports={
    init(title){
        var div=document.createElement('div');
        div.innerText=title;
        document.body.appendChild(div)
    }
}
```

**core.js**

```
module.exports= {
    show(m){
        alert(m)
    }
}
```

**page1.js**

```
var core=require('./core')
core.show('page1')
var base=require('./base')
base.init('page1')
```

**page2.js**

```
var core=require('./core')
core.show('page2')
var base=require('./base')
base.init('page2')
```

**page1.html**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script src="dist/common.js"></script>
<script src="dist/page1.js"></script>
</body>
</html>
```

**page2.html**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script src="dist/common.js"></script>
<script src="dist/page2.js"></script>
</body>
</html>
```

**webpack.config.js**

```
var webpack = require('webpack');
module.exports={
    entry:{
        page1:'./12-common/src/page1.js',
        page2:'./12-common/src/page2.js'
    },
    output:{
        path:'./12-common/dist',
        filename:'[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common')
    ]
}
```



