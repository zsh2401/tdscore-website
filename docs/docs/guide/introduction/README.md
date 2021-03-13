---
title: 介绍
---
TDSCore是一款使用[TypeScript](https://www.typescriptlang.org/)语言实现的一款框架，其中包含对数据结构、算法、数学程序的实现，以及对EcmaScript的增强。

# 支持的平台
TDSCore的编译成品仅使用ECMAScript 5特性（被全球	97.6%的浏览器完全兼容），兼容性极强，根据[Can I Use](https://caniuse.com/?search=ES5&static=1)提供的数据，TDSCore理论可运行在如下平台上：

|  IE   | Edge  | Firefox | Chrome | Safari| Node.js | Quick.js |
|  ----  | ----  | ---- | ---- | ---- |  ---- | ---- | 
| >=10  | >=12 | >=21 | >= 23 | >= 6 | >= 6.4.0 | 1st version |

TDSCore不依赖于任何JS平台特性，换句话说，可以运行在任何支持ECMA Script 5的运行时中。

# 模块导出规范
通过NPM直接安装的tdscore支持ES Module规范，而`tdscore.min.js`基于[UMD (Universal Module Definition)](https://github.com/umdjs/umd)进行模块化，您可以通过`AMD`,`CommonJS`,`浏览器全局变量`的方式进行使用，详见[安装](/docs/guide/installation)

# 重要特性
* 可读性: 优先为学习而设计🌌.
* 到处运行: 仅使用ES5语法特性🚄.
* 麻雀虽小:  仅19.1kB大小😍(v0.1.16).
* 包含一系列对ES的增强与拓展🚀.

# 开放源代码
目前，TDSCore以[MulanPSL2](http://license.coscl.org.cn/MulanPSL2)协议在Github进行开源：[zsh2401/tdscore](https://github.com/zsh2401/tdscore)