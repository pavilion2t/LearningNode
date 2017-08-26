Koa是一种简单好用的Web框架。
特点：优雅简介，表达力强，自由度高
本身代码只有1000多行
所有功能都通过插件实现，很符合UNIX哲学
Node版本要求7.6以上

1 架设HTTP服务
//只要三行代码，就可以用Koa架设一个HTTP服务
const Koa = require('koa');
const app = new Koa();
app.listen(3000);
