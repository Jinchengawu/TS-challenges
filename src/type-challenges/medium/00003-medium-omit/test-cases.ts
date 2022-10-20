/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-18 10:40:44
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-18 10:40:51
 * @FilePath: /TS-challenges/src/type-challenges/test-cases.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}
