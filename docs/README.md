---
home: true
heroImage: /icon.png
heroText: TDSCore
tagline: TypeScript实现的数据结构，算法，数学库
actionText: 立刻开始
actionLink: /docs/guide/introduction/
features:
    - title: 💦超强兼容性
      details: 运行在96%+的平台
    - title: 🤏超小的体积
      details: 压缩后小于30kB
    - title: ⚡持续更新
      details: 为研习而生

footer: MulanPSL2 Licensed | Copyright © 2021-present Seymour Zhang

---
<div align="center">

[![Test](https://github.com/zsh2401/tdscore/actions/workflows/test.yml/badge.svg)](https://github.com/zsh2401/tdscore/actions/workflows/test.yml)
[![Publish](https://github.com/zsh2401/tdscore/actions/workflows/publish.yml/badge.svg)](https://github.com/zsh2401/tdscore/actions/workflows/publish.yml)
![](https://img.shields.io/github/languages/top/zsh2401/tdscore)
![](https://img.shields.io/node/v/tdscore)

[![NPM version](https://img.shields.io/npm/v/tdscore.svg)](https://www.npmjs.com/package/tdscore)
![](https://badgen.net/npm/dy/tdscore)
![](https://img.shields.io/bundlephobia/minzip/tdscore)

</div>

# Wow📢
```typescript
import { LinkedList, HashMap } from "tdscore"

//TypeScript
let hashMap = new HashMap<string,number>();
hashMap.mapPut("a",1);
console.log(hashMap.mapGet("a")); // 1

let list = new LinkedList<number>()
list.listAdd(0)
console.log(list.listGet(0)) // 0
```
# 在线试用
[Try TDSCore on RunKit](https://npm.runkit.com/tdscore)
