---
title: DSArray
---

[查看源代码](https://github.com/zsh2401/tdscore/blob/master/src/DSArray.ts)

JS中的数组[]非常灵活，其自带了push, pop等一系列方法，并且长度可变。但对于TDSCore来说，这无益于对数据结构与算法进行严格实现这一目标。于是，为了提高代码的严谨程度，我使用ES5的Proxy技术以及TS的装饰器实现了一个模拟传统数组特性的数据结构`DSArray<E>`。
相比JS数组，其具有访问控制的特性：
* 不支持越界访问
* 不支持动态变长。

# 引入
```typescript
import {DSObject} from "tdscore"
//or
const DSObject = require("tdscore").DSObject
```

# 定义
```typescript
class DSArray<E> extends DSObject implements IIterable<E>{
    [index:number]:E
    readonly length:number
    getIterator():IIterator<E>
}
```
# DSArray
# 构造函数
DSArray的构造函数接受一个`number`以用于分配空间。
```typescript
const array = new DSArray(10)
//typescript
const array = new DSArray<number>(10)
```
# 索引器
您可以通过下标/索引器的方式直接访问元素
```typescript
array[0] = 0
console.log(array[0]) // 0
console.log(array[1]) //undefined

array[-1] //error
```
# 获取长度
```typescript
array.length//10
```

# 获取迭代器
查看[迭代相关文档](../../data-structure/Iterating/)
```typescript
const iterator = array.getIterator()

while(iterator.hasNext()){
    console.log(iterator.next())
}
```