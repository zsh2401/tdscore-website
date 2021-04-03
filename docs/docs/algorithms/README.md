---
title: 算法
---
# 程序 = 数据结构 + 算法

TDSCore将大部分与数据结构相关的算法，以及用于解决特定问题的算法放在了[src/algorithms/](https://github1s.com/zsh2401/tdscore/blob/HEAD/src/algorithm/index.ts)下。

# 基本用法
通常情况下，您可以通过如下方式引入算法：
```typescript
import { algorithms } from "tdscore"
// CJS: const algorithms = require("tdscore").algorithms

const a = [7,5,6,9]
algorithms.quickSort([7,6,5])
console.log(a) // [5,6,7,9]
```