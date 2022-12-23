/*
 * @Author: Carlos
 * @Date: 2022-12-15 01:18:19
 * @LastEditTime: 2022-12-23 16:21:15
 * @FilePath: /js-design-pattern/ts/structural/decorator.ts
 * @Description: 
 */
/**
 * 装饰器模式 (Decorator)
 * 对已有功能进行扩展，不改动原有的代码，对其他业务造成的影响。
 * TypeScript 中有装饰器， 但是必须额外添加配置
 * * 比较经典的应用场景，是页面点击事件跳转页面前的统计 PV（page view）
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
  return function (this: Function) {
    beforeFn.apply(this, arguments)
    return originalFn.apply(this, arguments)
  }
}

const appendFile = (filePath: string, data: string) => {
  fs.appendFileSync(filePath, data)
}

function logChange(content: string) {
  console.log('change: ', content)
}

// @ts-ignore
const appendFileAndLog = appendFile.before(logChange)
appendFile(gitignore, '\r\nsomethings')
appendFileAndLog(gitignore, '\r\nsomethings with log')

// echo separator
console.log(Array.from(new Array(30)).join('='))

// TypeScript 中的装饰器， 展示部分功能。
// 简单使用， 直接装饰 class， log会提前执行 (声明D ump 的时候)
function log(str: string) {
  return function (target: Function) {
    console.log(str + ' log')
  }
}
@log('@')
class Dump {
  constructor() {}
}
// new Dump()

// 复杂应用，事件附加 PV
function PV(str: string) {
  return function (
    target: ClickEvent,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalFn = descriptor.value
    // 拦截重写方法
    descriptor.value = function () {
      console.log(`${str} PV data send`)
      originalFn.apply(this, arguments)
    }
  }
}

class ClickEvent {
  @PV('home')
  linkToPage() {
    console.log('linkToPage')
  }
}

const event = new ClickEvent()
event.linkToPage()
