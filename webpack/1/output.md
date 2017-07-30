# 输出\(Output\)



```
const config = {
  output: {
    filename: 'bundle.js',
    path: '/home/proj/public/assets'
  }
};

module.exports = config;
```

## 选项

### `output.chunkFilename` {#outputchunkfilename}

`[id]`被 chunk 的 id 替换。

`[name]`被 chunk 的 name 替换（或者，在 chunk 没有 name 时使用 id 替换）。

`[hash]`被 compilation 生命周期的 hash 替换。

`[chunkhash]`被 chunk 的 hash 替换。

```
const config = {
  output: {
    filename: 'bundle.[name].[hash].js',
    path: '/home/proj/public/assets'
  }
};

module.exports = config;
```

### `output.filename` {#outputfilename}

指定硬盘每个输出文件的名称。在这里你**不能**指定为绝对路径！`output.path`选项规定了文件被写入硬盘的位置。`filename`仅用于命名每个文件。

**单个入口**

```
{
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  }
}
```

**多个入口**

如果你的配置创建了多个 "chunk"（例如使用多个入口起点或使用类似 CommonsChunkPlugin 的插件），你应该使用以下的替换方式来确保每个文件名都不重复。

`[name]`被 chunk 的 name 替换。

`[hash]`被 compilation 生命周期的 hash 替换。

`[chunkhash]`被 chunk 的 hash 替换。

```
{
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  }
}
```

###  `output.path`

导出目录为**绝对路径**（必选项）。

`[hash]`被 compilation 生命周期的 hash 替换

### `output.publicpath`

导出目录为**绝对路径**（必选项）。

`[hash]`被 compilation 生命周期的 hash 替换



