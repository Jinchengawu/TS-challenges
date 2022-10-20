/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-18 10:40:44
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-18 15:14:43
 * @FilePath: /TS-challenges/src/type-challenges/00014-easy-first/template.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
// type First<T extends any[]> = T extends [infer K , ...infer P] ? K : never

type First<T extends any[]> = T extends [infer K , ...infer P] ? K : never
