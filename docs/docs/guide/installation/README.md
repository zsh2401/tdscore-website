---
title: 安装
---

# Node.js🟢
```sh
npm install tdscore
#or
yarn add tdscore
```
## ES Module
```typescript
import {dsHashCode} from "tdscore"
dsHashCode(1); // 1
```

## CommonJS
```javascript
const dsHashCode = require("tdscore").dsHashCode;
dsHashCode(1); // 1
```
## Tree Shaking
Webpack可以通过`Tree Shaking`技术将您的引入进行按需编译，大幅减小产出物的体积。
```typescript
import dsHashCode from "tdscore/lib/dsHashCode"
dsHashCode(1); // 1
```

# 浏览器🌌
```html
<!-- Latest Version -->
<script src="https://cdn.jsdelivr.net/npm/tdscore/dist/tdscore.min.js"></script>
<script>
    tdscore.dsHashCode(1); //1
</script>
```