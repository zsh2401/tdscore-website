---
title: ArrayList<E> 线性表
---
[查看源代码](https://github.com/zsh2401/tdscore/blob/master/src/data-structure/linear/ArrayList.ts)
[测试用例](https://github.com/zsh2401/tdscore/blob/master/tests/data-structure/linear/ArrayList.test.ts)

`ArrayList<E>`是基于顺序表（数组）的可变长列表，其实现实现了`IList<E>`、`ICollection<E>`、`IIterable<E>`等接口。
主要特性如下

* 随机读写性能高，时间复杂度为 O(1)
* 数据操作性能较差。 增删改操作时间复杂度均为 O(n)
* 当内部空间不足时触发扩容，内部数组扩容为原来的2倍大小，并进行时间复杂度为O(n)的数据迁移操作

# 引入
```typescript
import { ArrayList } from "tdscore"
//or
const ArrayList = require("tdscore").ArrayList
```

# 示例
```typescript
const list = new ArrayList<number>()

list.add(1)
list.listGet(0) //1

list.listSet(0,2)
list.listGet(0) //2

list.collectionRemove(2) //Remove element by element
// list.listDelete(0) //Remove element by index
list.listGet(0) //Index out of range
```