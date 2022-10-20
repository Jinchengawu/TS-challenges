/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-18 10:40:44
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-20 16:06:14
 * @FilePath: /TS-challenges/src/type-challenges/medium/00003-medium-omit/template.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
/* _____________ 你的代码 _____________ */

type Filter<T,U> =  T extends U ? never : T

type MyPick<T, U extends keyof T> = {
  [P in U]:T[P]
}
type MyOmit<T, K extends keyof T> = MyPick<T,Filter<keyof T,K>>
