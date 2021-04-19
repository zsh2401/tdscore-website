---
title: 迭代
---
## TDSCore迭代标准
任何实现如下接口的对象，都将被TDSCore视为是可迭代的。
```typescript
//IIterable<E>
export default interface IIterable<E>{
    getIterator():IIterator<E>
}

//IIterator<E>
export default interface IIterator<E>{
    hasNext() : boolean
    next() : E
    current() : E
    reset() : void
}
```
可以注意到，此处的迭代接口设计参考了`C#`与`Java`。

## IIterable 可迭代

| 定义 | 说明 |
| ---- | ---- |
|`getIterator() : IIterator<E>` | 获取一个迭代器 |

对于任何一个实现`IIterable<E>`的对象，都必须实现以下特性：

* 每此调用`getIterator`，总是返回一个全新状态的迭代器
* 返回的迭代器必须符合迭代器标准

## IIterator 迭代器
| 定义 | 说明 |
| ---- | ---- |
|`hasNext() : boolean` | 指明是否还有下一个可迭代元素 |
|`next() : E` | 移动到下一个元素，并将其返回 | 
|`current() : E` | 获取当前位置的元素 |
|`reset() : E` | 重设迭代器状态 | 
对于上述函数，应当具有以下特性：
* 未进行任何移动时，current()应当抛出异常
* hasNext()===false时，next()应当抛出异常
* hasNext() 不可以抛出异常
* reset() 可以抛出异常，但要尽量避免

### 基本使用
```typescript
const iterator = fool.getIterator()
while(itereator.hasNext()){
    console.log(iterator.next())
}
```
不过，通常情况下你不需要这样去使用`Iterator`，TDSCore中准备了强大的迭代拓展API，您将会在后面的章节中了解到。