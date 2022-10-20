/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-18 10:40:44
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-20 18:34:59
 * @FilePath: /TS-challenges/src/type-challenges/medium/00010-medium-tuple-to-union/test-cases.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
