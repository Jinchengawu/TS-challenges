/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-17 18:25:23
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-19 23:39:52
 * @FilePath: /TS-challenges/src/type-challenges/03060-easy-unshift/test-cases.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]