/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-18 10:40:44
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-20 00:06:08
 * @FilePath: /TS-challenges/src/type-challenges/00898-easy-includes/template.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */

import type { Equal } from '@type-challenges/utils'

type Includes<T extends readonly any[], U extends any > = 
T extends [...infer F ,... infer TP] 
? Equal<U,F> extends true
? true 
: Includes<[TP],U> 
: false;