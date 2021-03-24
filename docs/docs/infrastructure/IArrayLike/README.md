---
title: IArrayLike
---
[查看源代码](https://github.com/zsh2401/tdscore/blob/master/src/IArrayLike.ts)

`IArrayLike<E>`是一种约定，实现了该接口的对象可以被tdscore内的数组相关算法进行排序，查找，处理等。   

目前[DSArray](../DSArray/)与`原生JS数组`均实现了`IArrayLike<E>`接口
```typescript
const a:IArrayLike<number> = []
const b:IArrayLike<string> = new DSArray<string>()
```