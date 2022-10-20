/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-18 10:40:44
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-19 23:24:34
 * @FilePath: /TS-challenges/src/type-challenges/00268-easy-if/template.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
type If<C extends boolean, T, F> = C extends true ? T : F