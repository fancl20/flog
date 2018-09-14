<!-- 
title: '现代前端一日游'
publish: 2018-03-01
author:
- fancl20
-->

## 背景

出于蛋疼，突发奇想想尝试一下最新最酷的前端技术，于是打开了 Google，搜索...（1 分钟后快速放弃），打开了 telegram 找波涛问了下前端最近都在用些啥（其实基本上从去年年中到现在流行的就是这几个），然后决定写一个 Blog（

## 技术选型

截止到 2018-03-01，选取最新最酷前端技术：

* webpack
* vue
* typescript

在我写这篇文章的时候 webpack 出了 4 而我还在用 3，hmmmmm....就当无事发生！

## 游记（？

记录下大致的心路历程

按照波涛的建议用 vue-cli 创建了项目，但是创建出了的是 js 的项目，研究了半天如何手改成 ts（要改 webpack 配置，改等等等等一堆东西），无果，搜了 issue 一下发现 vue-cli 的 3.0 可以直接创建 ts 的项目了，于是装了 @vue/cli 然后就创建成...并没有！总之因为弱智问题花了很久找波涛问了半天终于弄好了...

接下来就比较简单了，因为懒得配 webpack，直接在 require 里调了 markdown-loader，生成了 posts 目录下的索引（这边还踩了个坑，require 的 context 是 webpack 的，ts 带的 @types/node 里没有，需要自己装然后在 tsconfig.json 的 types 里加 webpack-env, 不然过不了编译），用 CommentNode 来解析 markdown 的 meta 信息（比如标题作者发布日期）然后就...就这样了。网站风格参考的 [rust.cc](http://rust.cc)，这种简洁大方永不过时的界面非常适合我们不会写 css 没有审美的后端农（

最后额外装了 markdown-loader, js-yaml, html-loader, @types/webpack-env 和一些依赖，还行（

## TODO

* 因为所有 blog 都被打包在一个 webpack 里面，可能需要研究下怎么分 chunk。
* 代码高亮和 latex 支持。代码高亮好说，highlight.js，latex 就...随缘吧好像不太好整合。
* 图片支持。先外链吧有心情我再想怎么搞（

### UPDATE: 2018-09-13

试图升级了一下依赖一堆 deprecated, 改了半天也没修好，只能重新创建一个了，要改的东西倒是和原来一样一会儿就弄好了。 **Welcome to front end!**
