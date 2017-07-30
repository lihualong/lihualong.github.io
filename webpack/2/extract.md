# 9ExtractTextWebpackPlugin

它会将所有的 入口chunk \(entry chunks\) 中的`require("xxx.css")`移动到分开的 css 文件。因此，你的样式不再内联到 javascript 里面，但会放到一个单独的 css 包文件当中。 如果你的样式文件大小较大，这会更快，因为样式文件会跟 javascript 包并行加载。

```
new ExtractTextPlugin(options: filename | object)
```

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| `id` | `{String}` | 此插件实例的唯一id。 （仅限高级用途，默认情况下自动生成） |
| `filename` | `{String}` | _\(必填\)_生成文件的文件名。会包含`[name]`,`[id]`和`[contenthash]` |
| `options.allChunks` | `{Boolean}` | 向所有额外的 chunk 提取（默认只提取初始加载模块） |
| `options.disable` | `{Boolean}` | 禁用插件 |
| `options.ignoreOrder` | `{Boolean}` | 禁用顺序检查 \(对 CSS Modules 有用!\), 默认`false` |

* `[name]`chunk 的名称

* `[id]`chunk 的数量

* `[contenthash]`提取文件根据内容生成的哈希

:警告:`ExtractTextPlugin`对**每个入口**`chunk`都生成对应的一个文件, 所以当你配置多个入口`chunk`的时候，你必须使用

`[name]`,`[id]`or`[contenthash]`

### 案例

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



