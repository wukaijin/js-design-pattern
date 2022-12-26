/*
 * @Author: Carlos
 * @Date: 2022-12-14 11:44:17
 * @LastEditTime: 2022-12-24 00:16:51
 * @FilePath: /js-design-pattern/ts/creational/constructor.ts
 * @Description:
 * 构造器模式 (Constructor)
 * 构造器模式并未在常规的23模式命名中，但 JS 中常用这种说法，列出参考
 */

// ES6 之前，构造器继承是典型用法
interface Student {
  name: string
  age: number
  grade: number
}
// const student_1: Student = {
//   name: 'David',
//   age: 16,
//   grade: 10
// }

// const student_2: Student = {
//   name: 'Lily',
//   age: 13,
//   grade: 6
// }

export function createStudent(
  name: string,
  age: number,
  grade: number
): Student {
  return {
    name,
    age,
    grade
  }
}
 

// ES6 class 中的 constructor 就是构造函数
export class StudentClass implements Student {
  name: string
  age: number
  grade: number
  constructor(name: string, age: number, grade: number) {
    this.name = name
    this.age = age
    this.grade = grade
  }
}

const student_1: Student = createStudent('Lily', 13, 6)

const student_2: Student = new StudentClass('David', 16, 10)

console.log(student_1, student_2)
