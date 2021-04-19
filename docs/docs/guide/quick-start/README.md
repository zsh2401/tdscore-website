---
title: 快速开始
---
# 在线试用
您可以通过以下两种方式在线试用`TDSCore`，无需配置任何开发环境。

**CodeSandbox**

<iframe src="https://codesandbox.io/embed/compassionate-fire-jhxkp?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:350px; border:0; border-radius: 4px; overflow:hidden;"
     title="compassionate-fire-jhxkp"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

**RunKit**

[Try TDSCore on RunKit](https://npm.runkit.com/tdscore)

# 安装
```sh
npm install tdscore --save
```

# 基本使用
```typescript
import { dsHashCode, algorithm } from "tdscore"

dsHashCode("Hello World");

const a = [9,8,6,7]
algorithm.quickSort(a)
console.log(a) // [6,7,8,9]
```

如果您仍需要在浏览器环境中直接引用，请参阅[安装](/docs/guide/installation)
