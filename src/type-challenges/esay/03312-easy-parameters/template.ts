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
type MyParameters<T extends (...args: any[]) => any> = T extends (  ...args: infer R) => any ? [...R] : []