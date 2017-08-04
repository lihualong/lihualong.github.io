# webpack-dev-server

[http://webpack.github.io/docs/webpack-dev-server.html](http://webpack.github.io/docs/webpack-dev-server.html)

## 安装

```
npm install webpack-dev-server --save-dev
npm install webpack-dev-server -g
```

### 如何使用

![](/assets/QQ截图20170728142731.png)

**main.js:**

```
alert('webpack-dev-server running')
```

**跟目录/webpack.config.js:**

注意：我们把配置代码写到项目根目录的webpack.config.js文件

```
var path = require("path");
module.exports = {
    entry: {
        app: ["./11-server/src/main.js"]
    },
    output: {
        path: path.resolve(__dirname, "11-server","build"),
        publicPath: "/assets/",
        filename: "dist.js"
    },
    devServer:{
        port:'4000',
        contentBase:'./11-server/build/',
    }
};
```

它将`build`目录作为根目录，默认的端口号是8080，通过port更改端口，通过contentBase更改跟目录

有一点需要注意的是:webpack-dev-server生成的包并没有放在你的真实目录中,而是放在了内存中.

在dist文件夹下创建index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <script src="assets/dist.js"></script>
</body>
</html>
```

运行如下命令

```
webpack-dev-server
```

浏览器会打开: http://localhost:4000，显示index.html页面，如果没有index.html文件，将会在浏览器中显示所有build目录下的文件和文件夹。

也可以把配置信息放到命令后面执行

```
webpack-dev-server --inline --content-base ./11-server/build/
```

## devServer配置

> --content-base &lt;file/directory/url/port&gt;：内容的基本路径。
>
> --quiet：不输出任何东西到控制台。
>
> --no-info：抑制无聊的信息。
>
> --colors：向输出添加一些颜色。
>
> --no-colors：不要在输出中使用颜色。
>
> --compress：使用gzip压缩。
>
> --host &lt;hostname/ip&gt;：主机名或IP。绑定到所有主机。0.0.0.0
>
> --port &lt;number&gt;： 端口。
>
> --inline：将webpack-dev-server运行时嵌入到包中。
>
> --hot：添加并将HotModuleReplacementPlugin服务器切换到热模式。注意：确保不要添加HotModuleReplacementPlugin两次。
>
> --hot --inline也添加了webpack/hot/dev-server条目。
>
> --public：覆盖--inline客户机模式下使用的主机和端口（对VM或Docker有用）。
>
> --lazy：不看，根据要求编辑（不能与之组合--hot）。
>
> --https：通过HTTPS协议为webpack-dev-server提供服务。包括在提供请求时使用的自签名证书。
>
> --cert，--cacert，--key：路径的证书文件。
>
> --open：在默认浏览器中打开url（对于webpack-dev-server版本&gt; 2.0）。
>
> --history-api-fallback：支持历史API回退。
>
> --client-log-level：控制浏览器中显示的控制台日志消息。使用error，warning，info或none。









