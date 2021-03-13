---
title: 快速开始
---

# 在线试用
您可以使用RunKit进行在线试用，无需配置任何开发环境。     
[Try TDSCore on RunKit](https://npm.runkit.com/tdscore)

# Node.js
:::tip
即便您是在浏览器上使用TDSCore，我们也推荐通过`npm`或`yarn`进行安装，这是当今主流的工程化开发方式。
:::
## 安装
```sh
npm install tdscore
#or
yarn add tdscore
```

## 使用
```typescript
//ES Module
import { dsHashCode, DSObject } from "tdscore"
//CommonJS
const dsHashCode = require("tdscore").dsHashCode;

dsHashCode(1); //1
dsHashCode("ABC");
dsHashCode({});
dsHashCode(new DSObject());
```

如果您仍需要在浏览器环境中直接引用，请参阅[安装](/docs/guide/installation)





