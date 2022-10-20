/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-17 18:25:23
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-17 18:26:34
 * @FilePath: /TS-challenges/src/type-challenges/easy-readonly/test-cases.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}