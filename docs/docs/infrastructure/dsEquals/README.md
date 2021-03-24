---
title: dsEquals（比较函数）
---
[查看源代码](https://github.com/zsh2401/tdscore/blob/master/src/dsEquals.ts)

**一个可靠的比较函数是进行查找等运算的基石。**
# 引入
```typescript
import {dsEquals} from "tdscore"
//or
const dsEquals = require("tdscore").dsEquals
```
# 定义
```typescript
/**
 * 
 * @returns true if a equals to b
 * */
function dsEquals(a:any,b:any):boolean;
```
# 值表
dsEquals具有如下特性：
## 严格等，则相等
当两个值通过JavaScript严格等操作符运算得到true时，并且其没有覆写equals方法，dsEquals必定返回true。
```typescript
const a = new DSObject()
const b = a
dsEquals(a,b) //true
```
## null is not undefined
```typescript
dsEquals(null,undefined) // false
dsEquals(undefined,null) //false
dsEquals(null,null) //true
dsEquals(undefined,undefined) //true
```
## 类型不等，永不相等
```typescript
const a = 49
const b = "1"
dsEquals(a,b) //false
```
## 自定义比较函数
当a或b的类继承自[DSObject](../DSObject/)时，则dsEquals则会调用其equals方法与另一个值进行对比。
```typescript
const a = new DSObject()
const b = new DSObject()
const c = null

//the equals function of a has been called
dsEquals(a,b) 
//the equals function of b has been called
dsEquals(b,a)
//the equals function of a has been called
dsEquals(null,a)
```
## 哈希码相等，则相等
:::danger
此特性仍在实验中，后期可能删除
:::
当a或b均不满足以上条件，则会对哈希值进行计算，哈希码相等则返回相等。
```typescript
const a = {} //hashcode:
const b = {} //hashcode:
dsEquals(a,b)//true
```