# ESLint的用途

* 审查代码是否符合编码规范和统一的代码风格；

* 审查代码是否存在语法错误；

# webpack如何整合ESLint

```
/* 这是webpack配置文件的内容，省略无关部分 */
{
  module: {
    preLoaders: [{
      test: /\.js$/, // 只针对js文件
      loader: 'eslint', // 指定启用eslint-loader
      include: dirVars.srcRootDir, // 指定审查范围仅为自己团队写的业务代码
      exclude: [/bootstrap/], // 剔除掉不需要利用eslint审查的文件
    }],
  },
  eslint: {
    configFile: path.resolve(dirVars.staticRootDir, './.eslintrc'), // 指定eslint的配置文件在哪里
    failOnWarning: true, // eslint报warning了就终止webpack编译
    failOnError: true, // eslint报error了就终止webpack编译
    cache: true, // 开启eslint的cache，cache存在node_modules/.cache目录里
  }
}
```

### eslint-loader放在`preLoaders`而不是`loaders`里? {#articleHeader5}

理论上来说放loaders里也无伤大雅，但放preLoaders里有以下好处：

* 放在preLoader是先于loader的，因此当ESLint审查到问题报了warning/error的时候就会停掉，可以稍微省那么一点点时间吧大概\[手动滑稽\]。

* 如果你使用了babel，或类似的loader，那么，通过webpack编译前后的代码相差就很大了，这会造成两个问题（以babel为例）：

  * babel把你的代码转成什么样你自己是无法控制的，这往往导致无法通过ESLint的审查。

  * 我们实际上并不关心编译后生成的代码，我们只需要管好我们自己手写的代码即可，反正谁也不会没事去读读编译后的代码吧？

# eslint安装配置

## 安装

```
npm install eslint -g
npm install eslint --save-dev
npm install eslint-loader --save-dev
```

## 配置

关于`eslint`的配置方式。比较多元化：

* `js`注释

* `.eslintrc.js`文件

* `package.json`里面配置`eslintConfig`字段

### .eslintrc.js

如果是使用.eslintrc.js文件，可以使用 `eslint --init`    自动创建

```
npm install eslint-loader --save-dev
```

下面是使用`eslint --init`自动生成的配置文件

```
module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
```

eslint的配置可以分为两类，文件配置：和rules同级的属性；规则配置：rules内部

### 文件配置

#### **env**：

你的脚本将要运行在什么环境中，要指定多个环境，请使用逗号分隔它们，或多次使用该选项

```
browser - 浏览器全局变量。
node - Node.js全局变量和Node.js范围。
commonjs - CommonJS全局变量和CommonJS范围（将其用于仅使用Browserify / WebPack的浏览器代码）。
shared-node-browser - Node和Browser共同的全局。
es6- 启用除模块之外的所有ECMAScript 6功能（这将自动将ecmaVersion解析器选项设置为6）。
worker - 网络工作者全局变量。
amd- 根据amd规范定义require()和define()作为全局变量。
mocha - 添加所有的摩卡测试全局变量。
jasmine - 添加1.3和2.0版本的所有Jasmine测试全局变量。
jest - Jest全局变量。
phantomjs - PhantomJS全局变量。
protractor - 量角器全局变量。
qunit - QUnit全局变量。
jquery - jQuery全局变量。
prototypejs - Prototype.js全局变量。
shelljs - ShellJS全局变量。
meteor - 流星全球变量。
mongo - MongoDB全局变量。
applescript - AppleScript全局变量。
nashorn - Java 8 Nashorn全局变量。
serviceworker - 服务工作者全局变量。
atomtest - 原子测试助手全局变量。
embertest - Ember测试助手全局变量
webextensions - WebExtensions全局变量
greasemonkey - GreaseMonkey全局变量
```

#### **globals**：

此选项定义全局变量，以使其不会被`no-undef`规则标记为未定义。默认情况下，任何指定的全局变量都是只读的，但是附加

`:true`到变量的名称可以确保`no-undef`也允许写入。要指定多个全局变量，请使用逗号分隔它们，或多次使用该选项

#### --ext

此选项允许您指定ESLint在您指定的目录中搜索JavaScript文件时将使用哪些文件扩展名。默认情况下，它`.js`仅用作文件扩展名。

#### extends

eslint还支持通过扩展来快速的引入开源的JavaScript代码规则，减少了我们选择规则的时间，例如eslint官方推荐的规则：

```
"extends": "eslint:recommended"
```

或者是前端圈内很流行的[airbnb 的规则](https://github.com/airbnb/javascript):

```
"extends": "airbnb"
```

前提是要先引入[airbnb 的插件](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)。airbnb的规则不仅包含了官方推荐的大部分规则，还加入了jsx、react和import的相关规则，能帮助我们一键完成react应用的代码规则配置。可在.eslintrc的rules中用自己的配置覆盖掉扩展中的默认值

#### **Plugins**

EsLint允许使用第三方插件

```
{
    "plugins": [
        "react"    
     ]
}
```

#### **Parser**

EsLint默认使用esprima做脚本解析，当然你也切换他，比如切换成babel-eslint解析

```
{
    "parser": "esprima" //默认，可以设置成babel-eslint，支持jsx
}
```

#### **parserOptions**

EsLint通过parserOptions，允许指定校验的ecma的版本，及ecma的一些特性

```
{
    "parserOptions": {
        "ecmaVersion": 6, //指定ECMAScript支持的版本，6为ES6
        "sourceType": "module", //指定来源的类型，有两种”script”或”module”
        "ecmaFeatures": {
            "jsx": true//启动JSX
        },
    }
}
```

### rules

[http://eslint.org/docs/rules/](http://eslint.org/docs/rules/)

eslint默认情况下不启用任何规则，只有我们在rules配置的才会起作用。

ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用哪些规则。改变一个规则设置，你必须设置规则 ID 等于这些值之一：

* `"off"`或 0 - 关闭规则
* `"warn"`或 1 - 开启规则，使用警告级别的错误：`warn`\(不会导致程序退出\)
* `"error"`或 2 - 开启规则，使用错误级别的错误：`error`\(当被触发的时候，程序会退出\)

rules可以配置如下：

> "no-alert": 0,//禁止使用alert confirm prompt
>
> "no-array-constructor": 2,//禁止使用数组构造器
>
> "no-bitwise": 0,//禁止使用按位运算符
>
> "no-caller": 1,//禁止使用arguments.caller或arguments.callee
>
> "no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
>
> "no-class-assign": 2,//禁止给类赋值
>
> "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
>
> "no-console": 2,//禁止使用console
>
> "no-const-assign": 2,//禁止修改const声明的变量
>
> "no-constant-condition": 2,//禁止在条件中使用常量表达式 if\(true\) if\(1\)
>
> "no-continue": 0,//禁止使用continue
>
> "no-control-regex": 2,//禁止在正则表达式中使用控制字符
>
> "no-debugger": 2,//禁止使用debugger
>
> "no-delete-var": 2,//不能对var声明的变量使用delete操作符
>
> "no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
>
> "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
>
> "no-dupe-args": 2,//函数参数不能重复
>
> "no-duplicate-case": 2,//switch中的case标签不能重复
>
> "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
>
> "no-empty": 2,//块语句中的内容不能为空
>
> "no-empty-character-class": 2,//正则表达式中的\[\]内容不能为空
>
> "no-empty-label": 2,//禁止使用空label
>
> "no-eq-null": 2,//禁止对null使用==或!=运算符
>
> "no-eval": 1,//禁止使用eval
>
> "no-ex-assign": 2,//禁止给catch语句中的异常参数赋值
>
> "no-extend-native": 2,//禁止扩展native对象
>
> "no-extra-bind": 2,//禁止不必要的函数绑定
>
> "no-extra-boolean-cast": 2,//禁止不必要的bool转换
>
> "no-extra-parens": 2,//禁止非必要的括号
>
> "no-extra-semi": 2,//禁止多余的冒号
>
> "no-fallthrough": 1,//禁止switch穿透
>
> "no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
>
> "no-func-assign": 2,//禁止重复的函数声明
>
> "no-implicit-coercion": 1,//禁止隐式转换
>
> "no-implied-eval": 2,//禁止使用隐式eval
>
> "no-inline-comments": 0,//禁止行内备注
>
> "no-inner-declarations": \[2, "functions"\],//禁止在块语句中使用声明（变量或函数）
>
> "no-invalid-regexp": 2,//禁止无效的正则表达式
>
> "no-invalid-this": 2,//禁止无效的this，只能用在构造器，类，对象字面量
>
> "no-irregular-whitespace": 2,//不能有不规则的空格
>
> "no-iterator": 2,//禁止使用\_\_iterator\_\_ 属性
>
> "no-label-var": 2,//label名不能与var声明的变量名相同
>
> "no-labels": 2,//禁止标签声明
>
> "no-lone-blocks": 2,//禁止不必要的嵌套块
>
> "no-lonely-if": 2,//禁止else语句内只有if语句
>
> "no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
>
> "no-mixed-requires": \[0, false\],//声明时不能混用声明类型
>
> "no-mixed-spaces-and-tabs": \[2, false\],//禁止混用tab和空格
>
> "linebreak-style": \[0, "windows"\],//换行风格
>
> "no-multi-spaces": 1,//不能用多余的空格
>
> "no-multi-str": 2,//字符串不能用\换行
>
> "no-multiple-empty-lines": \[1, {"max": 2}\],//空行最多不能超过2行
>
> "no-native-reassign": 2,//不能重写native对象
>
> "no-negated-in-lhs": 2,//in 操作符的左边不能有!
>
> "no-nested-ternary": 0,//禁止使用嵌套的三目运算
>
> "no-new": 1,//禁止在使用new构造一个实例后不赋值
>
> "no-new-func": 1,//禁止使用new Function
>
> "no-new-object": 2,//禁止使用new Object\(\)
>
> "no-new-require": 2,//禁止使用new require
>
> "no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
>
> "no-obj-calls": 2,//不能调用内置的全局对象，比如Math\(\) JSON\(\)
>
> "no-octal": 2,//禁止使用八进制数字
>
> "no-octal-escape": 2,//禁止使用八进制转义序列
>
> "no-param-reassign": 2,//禁止给参数重新赋值
>
> "no-path-concat": 0,//node中不能使用\_\_dirname或\_\_filename做路径拼接
>
> "no-plusplus": 0,//禁止使用++，--
>
> "no-process-env": 0,//禁止使用process.env
>
> "no-process-exit": 0,//禁止使用process.exit\(\)
>
> "no-proto": 2,//禁止使用\_\_proto\_\_属性
>
> "no-redeclare": 2,//禁止重复声明变量
>
> "no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
>
> "no-restricted-modules": 0,//如果禁用了指定模块，使用就会报错
>
> "no-return-assign": 1,//return 语句中不能有赋值表达式
>
> "no-script-url": 0,//禁止使用javascript:void\(0\)
>
> "no-self-compare": 2,//不能比较自身
>
> "no-sequences": 0,//禁止使用逗号运算符
>
> "no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
>
> "no-shadow-restricted-names": 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用
>
> "no-spaced-func": 2,//函数调用时 函数名与\(\)之间不能有空格
>
> "no-sparse-arrays": 2,//禁止稀疏数组， \[1,,2\]
>
> "no-sync": 0,//nodejs 禁止同步方法
>
> "no-ternary": 0,//禁止使用三目运算符
>
> "no-trailing-spaces": 1,//一行结束后面不要有空格
>
> "no-this-before-super": 0,//在调用super\(\)之前不能使用this或super
>
> "no-throw-literal": 2,//禁止抛出字面量错误 throw "error";
>
> "no-undef": 1,//不能有未定义的变量
>
> "no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
>
> "no-undefined": 2,//不能使用undefined
>
> "no-unexpected-multiline": 2,//避免多行表达式
>
> "no-underscore-dangle": 1,//标识符不能以\_开头或结尾
>
> "no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
>
> "no-unreachable": 2,//不能有无法执行的代码
>
> "no-unused-expressions": 2,//禁止无用的表达式
>
> "no-unused-vars": \[2, {"vars": "all", "args": "after-used"}\],//不能有声明后未被使用的变量或参数
>
> "no-use-before-define": 2,//未定义前不能使用
>
> "no-useless-call": 2,//禁止不必要的call和apply
>
> "no-void": 2,//禁用void操作符
>
> "no-var": 0,//禁用var，用let和const代替
>
> "no-warning-comments": \[1, { "terms": \["todo", "fixme", "xxx"\], "location": "start" }\],//不能有警告备注
>
> "no-with": 2,//禁用with
>
> "array-bracket-spacing": \[2, "never"\],//是否允许非空数组里面有多余的空格
>
> "arrow-parens": 0,//箭头函数用小括号括起来
>
> "arrow-spacing": 0,//=&gt;的前/后括号
>
> "accessor-pairs": 0,//在对象中使用getter/setter
>
> "block-scoped-var": 0,//块语句中使用var
>
> "brace-style": \[1, "1tbs"\],//大括号风格
>
> "callback-return": 1,//避免多次调用回调什么的
>
> "camelcase": 2,//强制驼峰法命名
>
> "comma-dangle": \[2, "never"\],//对象字面量项尾不能有逗号
>
> "comma-spacing": 0,//逗号前后的空格
>
> "comma-style": \[2, "last"\],//逗号风格，换行时在行首还是行尾
>
> "complexity": \[0, 11\],//循环复杂度
>
> "computed-property-spacing": \[0, "never"\],//是否允许计算后的键名什么的
>
> "consistent-return": 0,//return 后面是否允许省略
>
> "consistent-this": \[2, "that"\],//this别名
>
> "constructor-super": 0,//非派生类不能调用super，派生类必须调用super
>
> "curly": \[2, "all"\],//必须使用 if\(\){} 中的{}
>
> "default-case": 2,//switch语句最后必须有default
>
> "dot-location": 0,//对象访问符的位置，换行的时候在行首还是行尾
>
> "dot-notation": \[0, { "allowKeywords": true }\],//避免不必要的方括号
>
> "eol-last": 0,//文件以单一的换行符结束
>
> "eqeqeq": 2,//必须使用全等
>
> "func-names": 0,//函数表达式必须有名字
>
> "func-style": \[0, "declaration"\],//函数风格，规定只能使用函数声明/函数表达式
>
> "generator-star-spacing": 0,//生成器函数\*的前后空格
>
> "guard-for-in": 0,//for in循环要用if语句过滤
>
> "handle-callback-err": 0,//nodejs 处理错误
>
> "id-length": 0,//变量名长度
>
> "indent": \[2, 4\],//缩进风格
>
> "init-declarations": 0,//声明时必须赋初值
>
> "key-spacing": \[0, { "beforeColon": false, "afterColon": true }\],//对象字面量中冒号的前后空格
>
> "lines-around-comment": 0,//行前/行后备注
>
> "max-depth": \[0, 4\],//嵌套块深度
>
> "max-len": \[0, 80, 4\],//字符串最大长度
>
> "max-nested-callbacks": \[0, 2\],//回调嵌套深度
>
> "max-params": \[0, 3\],//函数最多只能有3个参数
>
> "max-statements": \[0, 10\],//函数内最多有几个声明
>
> "new-cap": 2,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
>
> "new-parens": 2,//new时必须加小括号
>
> "newline-after-var": 2,//变量声明后是否需要空一行
>
> "object-curly-spacing": \[0, "never"\],//大括号内是否允许不必要的空格
>
> "object-shorthand": 0,//强制对象字面量缩写语法
>
> "one-var": 1,//连续声明
>
> "operator-assignment": \[0, "always"\],//赋值运算符 += -=什么的
>
> "operator-linebreak": \[2, "after"\],//换行时运算符在行尾还是行首
>
> "padded-blocks": 0,//块语句内行首行尾是否要空行
>
> "prefer-const": 0,//首选const
>
> "prefer-spread": 0,//首选展开运算
>
> "prefer-reflect": 0,//首选Reflect的方法
>
> "quotes": \[1, "single"\],//引号类型 \`\` "" ''
>
> "quote-props":\[2, "always"\],//对象字面量中的属性名是否强制双引号
>
> "radix": 2,//parseInt必须指定第二个参数
>
> "id-match": 0,//命名检测
>
> "require-yield": 0,//生成器函数必须有yield
>
> "semi": \[2, "always"\],//语句强制分号结尾
>
> "semi-spacing": \[0, {"before": false, "after": true}\],//分号前后空格
>
> "sort-vars": 0,//变量声明时排序
>
> "space-after-keywords": \[0, "always"\],//关键字后面是否要空一格
>
> "space-before-blocks": \[0, "always"\],//不以新行开始的块{前面要不要有空格
>
> "space-before-function-paren": \[0, "always"\],//函数定义时括号前面要不要有空格
>
> "space-in-parens": \[0, "never"\],//小括号里面要不要有空格
>
> "space-infix-ops": 0,//中缀操作符周围要不要有空格
>
> "space-return-throw-case": 2,//return throw case后面要不要加空格
>
> "space-unary-ops": \[0, { "words": true, "nonwords": false }\],//一元运算符的前/后要不要加空格
>
> "spaced-comment": 0,//注释风格要不要有空格什么的
>
> "strict": 2,//使用严格模式
>
> "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN\(\)
>
> "valid-jsdoc": 0,//jsdoc规则
>
> "valid-typeof": 2,//必须使用合法的typeof的值
>
> "vars-on-top": 2,//var必须放在作用域顶部
>
> "wrap-iife": \[2, "inside"\],//立即执行函数表达式的小括号风格
>
> "wrap-regex": 0,//正则表达式字面量用小括号包起来
>
> "yoda": \[2, "never"\]//禁止尤达条件

## 案例

webpack.config.js

```
module.exports={
    entry:'./14-eslint/src/main.js',
    output:{
        filename:'./14-eslint/dist/main.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader:'eslint-loader',
            }
        ]
    }
}
```

main.js

```
var a=1;
var b=3;
console.log(a+b);
function show() {
    alert(a+b)
}
```

![](/assets/QQ截图20170730104447.png)

以上的显示不容易定位错误，我们在webpack.config.js修改如下

```
loaders:[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader:'eslint-loader',
                options: {
                        formatter: require('eslint-friendly-formatter')
                      }
            }
        ]
```

再次运行webpack，如下显示，这样我们就很容易修改错误了

![](/assets/QQ截图20170730110926.png)

## 错误

#### 1 Expected linebreaks to be ‘LF’ but found ‘CRLF’

```
  只需在eslintrc文件里面将
```

`/*eslint linebreak-style: ["error", "unix"]*/`

```
  改成
```

`/*eslint linebreak-style: ["error", "windows"]*/`

#### 2  Unexpected console statement

eslint默认不允许使用console，我们可以在rules里添加

```
"no-console":0,
```

#### 3 'show' is defined but never used

show方法调用了，但没有使用，可以在main.js最后加入调用 `show();`

#### 4  Missing semicolon

缺少结尾的 ;

```
alert(a+b);
```

#### 5  Expected indentation of 1 tab but found 4 spaces

缩进错误，修改rules

```
"indent": [
            "error",
            4
        ],
```



