/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-17 02:12:12
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-17 18:30:08
 * @FilePath: /TS-challenges/src/type-challenges/pick/template.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
type MyPick<T, KS extends keyof T> = {
  [K in KS] : T[K]
}

// 
function myPick(todo, keys){
  const obj = {}
  keys.forEach(key => {
    if(key in todo){
      obj[key] = todo[key]
    }
  })
  return obj
}