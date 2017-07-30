# 10es6

编译es6需要安装相关loader

```
npm install babel-loader --save
npm install babel-preset-es2015 --save
```

![](/assets/QQ截图20170727122506.png)

main.js

```
import Person from './person.js';
let p=new Person('hello',30);
document.write(p.show());
```

person.js

    class Person{
        constructor(name,age){
            this.name=name;
            this.age=age;
        }
        show(){
            return `我是${this.name},我今年${this.age}岁了`
        }
    }
    export default Person;

index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
</body>
</html>
```

webpack.config.js

```
var htmlPlugin=require('html-webpack-plugin');
var path=require('path');
module.exports= {
    entry: "./10-es6/src/main.js",
    output: {
        path: './10-es6/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        ],
    },
        plugins: [
            new htmlPlugin(
                {
                    title: 'My App',
                    filename: 'index.html',
                    template: './10-es6/src/index.html',
                }
            )
        ]
}
```



