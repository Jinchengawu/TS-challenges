/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-18 10:40:44
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-18 18:24:55
 * @FilePath: /TS-challenges/src/type-challenges/template.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
/* _____________ 你的代码 _____________ */

type Last<T extends any[]> = T extends [infer F , ...infer TF] ? 
T['length'] extends 1 ? 
F : Last<TF> : never