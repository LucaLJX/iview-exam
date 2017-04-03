#iView-exam


# iView-project
> 源自[https://github.com/icarusion/vue-vueRouter-webpack](https://github.com/icarusion/vue-vueRouter-webpack)

本工程适用于基于 Vue.js1.0 + vue-router + webpack + iView 的项目，已经将 iView 配置完成，只需要按步骤初始化即可。

## 介绍

本项目是基于iview框架开发的考试管理系统，系统分为院校管理、班级学生管理、教师管理等。主要实现学生线上考试功能。此项目目前为管理后台，考试系统后续开发。


## 安装
### 安装cnpm
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

```bush
// 安装前请先确保已安装node和npm
// 需要提前在全局安装webpack和webpack-dev-server,如果已安装请忽略
cnpm install webpack -g
cnpm install webpack-dev-server -g

// 安装成功后,再安装依赖
cnpm install
```
## 运行
### 开发环境
```bush
// 注意首次使用需要执行下面的init命令来生成入口html文件,以后不用再执行 ~~
// iview升级，不再需要执行init命令
npm run init
npm run dev
```
### 生产环境(打包)
```bush
npm run build
```
### 访问
在浏览器地址栏输入[http://127.0.0.1:8080](http://127.0.0.1:8080)

## 开发者

github: https://github.com/LucaLJX
邮箱： 443926598@qq.com
qq： 443926598
wechat： ljx_2b