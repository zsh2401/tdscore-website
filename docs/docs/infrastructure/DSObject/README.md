---
title: DSObject
---

[查看源代码](https://github.com/zsh2401/tdscore/blob/master/src/DSObject.ts)

DSObject类似Java中的`java.lang.Object`、C#中的`System.Object`、Objective-C中的`NSObject`，被设计为项目中大部分类型的基类。其可以为`tdscore`或用户的类型提供一套统一的行为。

# 引入
```typescript
import {DSObject} from "tdscore"
//or
const DSObject = require("tdscore").DSObject
```
# 主要方法
## DSObject#equals
**可根据需求覆写**

:::tip
其在会被`dsEuqlas`以高优先级调用
:::
通常用于比较，当实例与传入的值被认为相等时，应当返回true。默认情况下该函数特性类似于[dsEquals](../dsEquals/)。如果需要覆写，请您务必保证如下特性，否则将可能导致不可预期的逻辑错误：

* 其能够处理任何类型的值，包括`null`与`undefined`
* 不能抛出任何异常

```typescript
function equals(other:any):boolean;
```
## DSObject#getHashCode
**不建议进行覆写**

:::tip
其会被`dsHashCode`直接调用
:::

获取哈希值的函数，带有缓存机制，[默认实现](https://github.com/zsh2401/tdscore/blob/master/src/DSObject.ts)的行为是调用`DSObject#newHashCode`进行计算，缓存并返回计算结果，二次调用时直接使用缓存的值。   
:::warning
如果您强行覆写该函数，将会失去该函数的缓存特性，并且您必须保证每一次计算的值都相等。
:::

```typescript
function getHashCode():number;
```

## DSObject#newHashCode
**可根据需求覆写**

该函数默认情况下被`DSObject#getHashCode`在需要时进行计算，在整个DSObject的生命周期中只会被调用一次。

您必须确保以下特性存在于该函数中：
* 不能抛出任何异常
```typescript
function newHashCode():number
```
## DSObject#referenceEquals
**禁止覆写**

该函数与传入的值进行引用（指针）对比。
```typescript
function referenceEquals(other:any):boolean
```
## DSObject#toString
**可根据需求覆写**

类似其他语言中的`toString`方法，输出与对象的字符串化表示。

```typescript
function toString():string
```

## DSObject.isDSObject
判断一个对象是否是`DSObject`，并且返回传入的泛型值。
```typescript
static function isDSObject<T extends DSObject = DSObject>(e: any): e is T
```

## DSObject.typeEquals
判断两个值类型是否相等
:::danger
实验特性
:::
```typescript
static function typeEquals(a: any, b: any): boolean 
```