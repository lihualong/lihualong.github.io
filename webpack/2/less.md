# 4less {#4less}

先安装less和less-loader

```
npm install less --save
npm install less-loader --save
```

![](/assets/QQ截图20170726113410.png)

entry.js:

```
require('./index.less');
```

**index.less:**

```
@import "./common.less";
@import "./less1.less";
@import "./less2.less";
```

**common.less:**

```
body{
  font-size: 30px;
  font-family: "Microsoft YaHei";
}
@color:blue;
@bg-color:#ccc;
```

**less1.less:**

```
@import "common.less";
body{
  color:@color;
}
```

**less2.less:**

```
@import "./common.less";
body{
  background-color:@bg-color;
}
```

webpack.config.js

```
module.exports = {
    /*入口*/
    entry: './4-less/src/entry.js',
    /*输出*/
    output: {
        path: './4-less/dist',
        filename: 'app.js'
    },
    module: {
        /*loader配置*/
        loaders: [
            // 需要安装less-loader 、less
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
        ]
    }
}
```

less编译需要配合style-loader,css-loader