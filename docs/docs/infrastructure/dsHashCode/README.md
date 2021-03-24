---
title: dsHashCode（哈希函数）
---
在TDSCore的数据结构开发过程中，总是需要唯一地判定某个对象，目前已有的`deep-equals`算法虽可以用于对比对象内容，但无法做到让对象在整个生命周期中被唯一标识。因此`dsHashCode`诞生了。

您可以通过如下方式引入`dsHashCode`
```typescript
import { dsHashCode } from "tdscore"
```
# 特性
## 支持任何ECMA Script值
您可以传入任何值并获取其哈希码。
```typescript
dsHashCode(1);
dsHashCode(true);
dsHashCode(null);
dsHashCode(undefined);
dsHashCode({});
dsHashCode(new DSObject());
```
## 对象的哈希码总是相等的
无论对象是否被修改，在对象的整个生命周期中，哈希码都是相等的，我们可以通过哈希码唯一确定一个对象。
```typescript
const obj = {}

const hashCode1 = dsHashCode(obj);
const hashCode2 = dsHashCode(obj);
hashCode1 === hashCode2 // true

obj.a = ""
const hashCode3 = dsHashCode(obj);
hashCode3 === hashCode1 //true
```

## 相等的对象，哈希码相同
```typescript
declare const a:number;
declare const b:number;
a === b;//true
dsHashCode(a) === dsHashCode(b); // true

const c = {};
const d = c;
dsHashCode(c) === dsHashCode(d); // true
```
## 自定义哈希算法
任何对象可通过实现`IHashCodeGettable`接口，自定义其哈希值。
:::danger
自定义的哈希算法必须确保哈希值在整个对象的生命周期中总是相等。
:::

```typescript
//TypeScript
import IHashCodeGettable from "tdscore/lib/util/hash/IHashCodeGettable"
class A implements IHashCodeGettable{
    getHashCode():number{
        return 2401;
    }
}

dsHashCode(new A()); // 2401
```
事实上，有`ECMA Script`的灵活性，当您使用`JavaScript`时，可以用如下方法自定义哈希算法：
```javascript
const a ={}
a.getHashCode = function(){
    return 2401;
}

dsHashCode(a); // 2401
```
:::tip
`DSObject`实现了`IHashCodeGettable`接口。
:::
## 污染性
对于实现了`IHashCodeGettable`的对象以及`Primitive Type`，`dsHashCode`在计算过程中不会留下任何痕迹。   
但对于其它对象，为了实现`哈希码在整个生命周期不变`这一点，算法不得不在对象中留下痕迹。在`tdscore v0.1.17中`，这个痕迹是一个闭包函数，您可以阅读[相关源代码](https://github.com/zsh2401/tdscore/blob/master/src/util/hash/weekhash.ts)进行进一步了解。
