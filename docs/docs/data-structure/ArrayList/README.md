---
title: ArrayList<E>（顺序表）
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

# 方法
| 方法名 | 使用 |
| ---- | ---- |
| `listGet(index:number):E` | 根据下标返回值，如果下标非法，则抛出异常 |
| `listSet(index:number,value:E)` | 设置指定位置的值，如果下标非法，则抛出异常 |
| `listAdd(value:E)` | 在列表最后添加一个元素 |
| `size():number` | 获取列表大小 |
| `isEmpty(): boolean` | 判断列表是否为空 |