# nodeJS blog

## 开发环境

* Node.js: 8.9.1
* MongoDB: 3.4.10
* Express: 4.16.2

## 本地开发

```
$ npm install
$ npm start
```

## 技术栈

* 使用 nodeJS
* 使用 MongoDB
* 使用 Express


## 目录说明
```
.
├── README.md           //说明文件
├── mock                // mock文件
├── package.json        // 存储项目名、描述、作者、依赖等等信息
├── index.js            // 程序主文件
├── public              // 存放静态文件，如样式、图片等
├── routes              // 存放路由文件
└── views               // 存放模板文件

```

## 开发流程
### 一、安装依赖模块
npm i config-lite connect-flash connect-mongo ejs express express-formidable express-session marked moment mongolass objectid-to-timestamp sha1 winston express-winston --save
#### 1.对应模块的用处：
```
1.express: web 框架
2.express-session: session 中间件
3.connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用
4.connect-flash: 页面通知的中间件，基于 session 实现
5.ejs: 模板
6.express-formidable: 接收表单及文件上传的中间件
7.config-lite: 读取配置文件
8.marked: markdown 解析
9.moment: 时间格式化
10.mongolass: mongodb 驱动
11.objectid-to-timestamp: 根据 ObjectId 生成时间戳
12.sha1: sha1 加密，用于密码加密
13.winston: 日志
14.express-winston: express 的 winston 日志中间件
```
#### 2.ESLint
ESLint 是一个代码规范和语法错误检查工具。使用 ESLint 可以规范我们的代码书写，可以在编写代码期间就能发现一些低级错误。

ESLint 需要结合编辑器或 IDE 使用，如：
Sublime Text 需要装两个插件：SublimeLinter + SublimeLinter-contrib-eslint
VS Code 需要装一个插件：ESLint

全局安装 eslint：
npm i eslint -g
运行：

eslint --init
初始化 eslint 配置，依次选择：

-> Use a popular style guide
-> Standard
-> JSON

注意：如果 Windows 用户使用其他命令行工具无法上下切换选项，切换回 cmd。

eslint 会创建一个 .eslintrc.json 的配置文件，同时自动安装并添加相关的模块到 devDependencies。这里我们使用 Standard 规范，其主要特点是不加分号。

### 二、功能与路由设计
在开发博客之前，我们首先需要明确博客要实现哪些功能。由于此程序主要为了学习而用，所以只实现了博客最基本的功能，其余的功能（如归档、标签、分页等等）读者可自行实现。

功能及路由设计如下：
```
1.注册
  i.注册页：GET /signup
  ii.注册（包含上传头像）：POST /signup
2.登录
  i.登录页：GET /signin
  ii.登录：POST /signin
3.登出：GET /signout
4.查看文章
  i.主页：GET /posts
  ii.个人主页：GET /posts?author=xxx
  iii.查看一篇文章（包含留言）：GET /posts/:postId
5.发表文章
  i.发表文章页：GET /posts/create
  ii.发表文章：POST /posts/create
6.修改文章
  i.修改文章页：GET /posts/:postId/edit
  ii.修改文章：POST /posts/:postId/edit
  iii.删除文章：GET /posts/:postId/remove
7.留言
  i.创建留言：POST /comments
  ii.删除留言：GET /comments/:commentId/remove
```
```
由于此博客页面是后端渲染的，所以只通过简单的 <a>(GET) 和 <form>(POST) 与后端进行交互，如果使用 jQuery 或者其他前端框架（如 Angular、Vue、React 等等）可通过 Ajax 与后端交互，则 api 的设计应尽量遵循 Restful 风格。

Restful
Restful 是一种 api 的设计风格，提出了一组 api 的设计原则和约束条件。

如上面删除文章的路由设计：

GET /posts/:postId/remove
Restful 风格的设计：

DELETE /posts/:postId
可以看出，Restful 风格的 api 更直观且优雅。
```

更多阅读：

http://www.ruanyifeng.com/blog/2011/09/restful
http://www.ruanyifeng.com/blog/2014/05/restful_api.html
http://developer.51cto.com/art/200908/141825.htm
http://blog.jobbole.com/41233/


## 参考资料
**NODEJS相关：**

 - https://nodejs.org
 - http://expressjs.com
 - https://www.npmjs.com/package/ejs#tags
 - https://github.com/nswbmw/N-blog

**ES6相关：**

 - https://github.com/DrkSephy/es6-cheatsheet


