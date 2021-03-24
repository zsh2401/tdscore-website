---
title: DSEvent（事件）
---
[查看源代码](https://github.com/zsh2401/tdscore/blob/master/src/DSArray.ts)
[测试用例](https://github.com/zsh2401/tdscore/blob/master/tests/infrastructure/DSEvent.test.ts)

`DSEvent`提供事件广播，以及注册与移除事件监听的能力。

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
    console.log(sender)
    console.log(args)
}
e.add(handler)
```

# 触发事件
```typescript
e.raise(null,1)
```

