/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2022-10-17 02:17:04
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2022-10-17 02:17:30
 * @FilePath: /TS-challenges/src/type-challenges/pick/test-cases.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhanyuan dreamworks.cnn@gmail.com, All Rights Reserved. 
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}