---
title: Lazy（懒加载）
---
[查看源代码](https://github.com/zsh2401/tdscore/blob/master/src/Lazy.ts)
Lazy为用户提供了按需加载/懒加载的便携方式。

# 引入
```typescript
import { Lazy } from "tdscore"
//or
const Lazy = require("tdscore").Lazy
```
# 使用
向构造函数传入工厂方法。
```typescript
const lazy:Lazy<number> = new Lazy(()=>{
    console.log("factory method has been called.")
    return Math.random() * 1000;
})
```
当外界首次调用Lazy#value属性时，将会初始化值并进行缓存。
```typescript
const v = lazy.value // 123.4
//Output factory method has been called.
```
此后，工厂函数将会被释放，对value属性的获取将使用缓存的值。
```typescript
const v2 = lazy.value //123.4
```
