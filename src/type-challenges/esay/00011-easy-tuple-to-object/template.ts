/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-17 19:49:47
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-17 19:53:10
 * @FilePath: /TS-challenges/src/type-challenges/00011-easy-tuple-to-object/template.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]:P
}