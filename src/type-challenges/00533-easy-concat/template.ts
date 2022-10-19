/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-18 10:40:44
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-19 23:27:13
 * @FilePath: /TS-challenges/src/type-challenges/00533-easy-concat/template.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
type Concat<T extends any[], U  extends any[]> = [...T , ...U]