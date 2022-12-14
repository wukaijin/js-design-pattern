/**
 * 装饰器模式 (Decorator)
 * 对已有功能进行扩展，不改动原有的代码，对其他业务造成的影响。
 * ES5 示例是覆写了方法，有其局限性
 * TypeScript 中有装饰器， 但是必须额外添加配置
 */

import fs from 'fs'
import path from 'path'

const gitignore = path.resolve(__dirname, '../../', '.gitignore')

// interface Function {
//   before(): void
// }
// @ts-ignore
Function.prototype.before = function (beforeFn) {
  const originalFn = this
  return function(this: Function) {
    const _that = this
    beforeFn.apply(_that, arguments)
    return originalFn.apply(_that, arguments)
  }
}

let appendFile = (filePath: string, data: string) => {
  fs.appendFileSync(filePath, data)
}

function logChange(content: string) {
  console.log('change: ', content);
}

// @ts-ignore
appendFile = appendFile.before(logChange)
appendFile(gitignore, '\r\nsomethings')

// echo separator
console.log(Array.from(new Array(30)).join('='))

// TypeScript 中的装饰器， 展示部分功能

function log (str: string) {
  return function (target: any) {
    console.log(str + ' log')
  }
}
@log('@')
class Dump {
  constructor() {}
}
new Dump()









