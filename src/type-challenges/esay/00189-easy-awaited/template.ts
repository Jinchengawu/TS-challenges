/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-18 10:40:44
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-19 23:43:10
 * @FilePath: /TS-challenges/src/type-challenges/00189-easy-awaited/template.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
type MyAwaited<T extends Promise<unknown>> = T extends Promise< infer P > ? 
P extends Promise< unknown > ? MyAwaited<P> 
: P
: never