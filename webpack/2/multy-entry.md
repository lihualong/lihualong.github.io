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