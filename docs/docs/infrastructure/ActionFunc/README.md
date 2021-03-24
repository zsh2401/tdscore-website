---
title: Action&Func
---
:::tip
此章内容仅面向TypeScript用户
:::
[查看Action源代码](https://github.com/zsh2401/tdscore/blob/master/src/Action.ts)
[查看Func源代码](https://github.com/zsh2401/tdscore/blob/master/src/Func.ts)

TDSCore为用户提供了开箱即用的基本函数类型定义。

# Action
Action是无返回值的。
```typescript
import { Action0, Action1, Action2, Action3...} from "tdscore"

//不接收任何参数
const a0:Action0 = ()=>{}

//接收一个number类型参数
const a1:Action1<number> = (x:number)=> x**x

//接收两个参数
const a2:Action2<number,string> = (x:number,desc:string)=>{ //... }

//以此类推...
```
# Func
Func是具有返回值的。
```typescript
import { Func0, Func1, Func2, Func3...} from "tdscore"

//不接收任何参数，返回boolean
const a0:Func0<boolean> = ()=>true

//接收一个number类型参数，返回string
const number2String:Func1<number, string> = (x:number)=> Number(x).toString()

//接收两个参数，返回一个stirng
const a2:Func2<number, string, boolean> = (a:number,b:string)=>{
     /* ... */;
     return true
}
//以此类推...
```