---
title: DSNumber--高精度计算
---
:::warning
目前的DSNumber基于[bignumber.js](https://mikemcl.github.io/bignumber.js/)，后期考虑采用纯自主实现。
:::

[查看源代码](https://github.com/zsh2401/tdscore/blob/master/src/DSNumber.ts)

DSNumber是tdscore内部高精度运算的基石，并解决了类似“0.1 + 0.2 !== 0.3”的问题。

# 引入
```typescript
import { DSNumber } from "tdscore"
//or
const DSNumber = require("tdscore").DSNumber
```

# 使用
通过`DSNumber.valueOf`函数，您可以将一个`字符串`、`JS数字`、`DSNumber`转换为`DSNumber`。

```typescript
const a = DSNumber.valueOf("2401")
const b = DSNumber.valueOf(2401)
const c = DSNumber.valueOf(a)
const d = DSNumber.valueOf(1937)
```
## 转换
```typescript
const n = DSNumber.valueOf(2401)

n.toJSNumber() // 2401
n.toString() // "2401"
// 36进制
n.toString(36) // “1up”
```

## 四则运算
```typescript
const x = DSNumber.valueOf(10)

//加法
const y = x.plus(x)
y.toJSNumber() // 20

//减法
x.sub(x).toJSNumber() // 0

//乘法
y.mul(x).toJSNumber() // 200

//除法
//支持与JSNumber进行运算
x.divBy(100).toJSNumber() // 0.1
```
## 比较
您可以通过DSNumber上的各种比较函数实现比较。
```typescript

/* 等于 */
a.equals(b) // true
a.equals(d) //false

/* 大于 > */
a.greaterThan(d) // true 

/* 大于等于 >= */
a.greaterThanOrEqualsTo(d)// true   

/* 小于 < */
a.lessThan(d) // false 

/* 小于等于 <= */
d.lessThanOrEqualsTo(a) // true
```

# 其它方法
| 方法定义 | 用途 |
| ---- | ---- |
| `isPosivite() : boolean` | 判断是否为正数 |
| `negated() : DSNumber` | 取相反数 |
| `abs() : DSNumber` | 取绝对值 |
| `isInteger() : boolean` | 判断是否是整数 |