/*
 * @Author: Carlos
 * @Date: 2022-12-19 16:09:09
 * @LastEditTime: 2022-12-23 00:26:02
 * @FilePath: /js-design-pattern/ts/structural/composite.ts
 * @Description:
 * 组合模式（Composite）
 * 把一组对象相似当做单一的对象，依据树形结构来组合对象。
 * 部分-整体的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。
 */

import { promises as fs } from 'fs'
import path from 'path'

type CocStr = {
  name: string
  isDirectory: boolean
  children: CocStr[]
}
/**
 * @description: 文件夹
 * @param {string} path
 * @return {*}
 */
class Doc {
  path: string
  isDirectory: boolean
  children: Doc[]
  constructor(path: string) {
    this.path = path
    this.isDirectory = false
    this.children = []
  }
  scan() {
    fs.readdir(this.path).then(files => {
      if (files.length) {
        this.isDirectory = true
        files.forEach(file => {
          const filePath = path.resolve(this.path, file)
          if (file.indexOf('node_modules') !== -1) return
          fs.stat(filePath).then(fileStat => {
            const f = new Doc(filePath)
            this.children.push(f)
            if (fileStat.isDirectory()) {
              f.scan()
            }
          })
        })
      }
    })
  }
  toString(): CocStr {
    // easy to console
    return {
      name: this.path.split('/').pop() || '',
      // name: this.path,
      isDirectory: this.isDirectory,
      children: this.children.map((c) => c.toString())
    }
  }
}

const repository = path.resolve(__dirname, '../..')
const repositoryDoc = new Doc(repository)
repositoryDoc.scan()
setTimeout(() => console.log(repositoryDoc.toString()), 1000)
