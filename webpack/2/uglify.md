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
