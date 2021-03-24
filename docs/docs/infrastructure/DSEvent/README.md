---
title: DSEvent（事件）
---
[查看源代码](https://github.com/zsh2401/tdscore/blob/master/src/DSArray.ts)
[测试用例](https://github.com/zsh2401/tdscore/blob/master/tests/infrastructure/DSEvent.test.ts)

`DSEvent`提供事件广播，以及注册与移除事件监听的能力。   
并且具有如下特性：
* 按照注册循序向监听器进行事件广播
* 事件监听器抛出异常不会影响其它事件的执行

# 引入
```typescript
import {DSEvent} from "tdscore"
//or
const DSEvent = require("tdscore").DSEvent
```
# 创建事件
```typescript
const e = new DSEvent()
```
# 注册监听器
```typescript
function handler(sender,args){
    console.log("sender: " + sender)
    console.log("args: " + args)
}
e.add(handler)
```

# 触发事件
```typescript
e.raise(null,1)
// sender: null
// args: 1
```

# 移除监听器
```typescript
e.remove(handler)
```

