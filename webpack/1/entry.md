# 入口起点\(Entry Points\) {#入口起点(Entry Points)}

在 webpack 配置中有多种方式定义`entry`属性。

## 单个入口（简写）语法 {#单个入口（简写）语法}

用法：`entry: string|Array<string>`

**webpack.config.js**

```
module.exports = {
    entry: './src/entry.js',
}
```

`entry`属性的单个入口语法，是下面的简写：

```
module.exports = {
    entry:{
      main: './src/entry.js'
      }
}
```

如果把entry写成一个数组，这些文件会合并成一个文件

```
module.exports = {
   entry:['./src/test1.js','./src/test2.js','./src/test3.js']
}
```

## 对象语法 {#对象语法}

用法：`entry: {[entryChunkName: string]: string|Array<string>}`

**webpack.config.js**

```
module.exports = {
    entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
}
```

对象语法会比较繁琐。然而，这是应用程序中定义入口的最可扩展的方式。

#### 多个页面应用程序 {#多个页面应用程序}

**webpack.config.js**

```
module。exports={
    entry: {
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
      }
}
```



