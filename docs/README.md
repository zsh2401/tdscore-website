---
title: TDSCore-学习驱动的ES数据结构实现
---
<div align="center">


![](./icon.png)


# 😊TDSCore

Data Structure, Algorithms, Mathmatic codes implenemntes with 99% TypeScript!✨ 

[Getting Started Now!](./docs)

[![Test](https://github.com/zsh2401/tdscore/actions/workflows/test.yml/badge.svg)](https://github.com/zsh2401/tdscore/actions/workflows/test.yml)
[![Publish](https://github.com/zsh2401/tdscore/actions/workflows/publish.yml/badge.svg)](https://github.com/zsh2401/tdscore/actions/workflows/publish.yml)
![](https://img.shields.io/github/languages/top/zsh2401/tdscore)
![](https://img.shields.io/node/v/tdscore)

[![NPM version](https://img.shields.io/npm/v/tdscore.svg)](https://www.npmjs.com/package/tdscore)
![](https://badgen.net/npm/dy/tdscore)
![](https://img.shields.io/bundlephobia/minzip/tdscore)

</div>


# Features
* Readable: Designed for study at first🌌.
* Run on EVERYWHERE: Using only ECMAScript 5 features🚄.
* Smaller:  minified and gzipped😍 .
* A series of tools which can enhance the ability of ECMA Script🚀.

# Getting Started
TDSCore is supporting AMD, CommonJS, ES Moudle and Global variable.

## Install
### [Node.js💖](http://nodejs.org/)
`npm install tdscore`

### Browser👏
```html
<srcipt src="//cdn.jsdelivr.net/npm/tdscore/dist/tdscore.min.js"></script>
```

### Import🎉
```typescript
//Browser🌐
const HashMap = tdscore.HashMap;

//ES Module🍪
import { HashMap } from "tdscore"

//Common JS🛵
const tdscore = require("tdscore");
const HashMap = tdscore.HashMap;

//Tree Shaking🛸
import HashMap from "tdscore/lib/data-structure/map/HashMap"

```
### Example of usage
```typescript
//TypeScript
let hashMap = new HashMap<string,number>();
//ECMAScript 5
var hashMap = new HashMap();

hashMap.mapPut("a",1);
console.log(hashMap.mapGet("a")); // 1
```
# Try on RunKit
Try any Node.js package right in your browser.   
[RunKit for TDSCore](https://npm.runkit.com/tdscore)

<div align="center">

# Contributors
Please develop on the dev branch, and Pull Requests are always welcomed.


![](https://contrib.rocks/image?repo=zsh2401/tdscore)


</div>