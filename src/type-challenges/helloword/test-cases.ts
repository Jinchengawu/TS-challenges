/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-17 02:14:47
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-17 02:15:52
 * @FilePath: /TS-challenges/src/type-challenges/helloword/test-cases.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]