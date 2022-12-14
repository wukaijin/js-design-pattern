/**
 * 原型模式 (Prototype)
 * JavaScript 中的数据类型都有其原型
 * 比如 Object.prototype, String.prototype
 */

interface Student {
  name: string
  age: number
  grade: number
  study: () => void
}

// ES6 之前，原型继承是典型用法，作用是在 __proto__ 共享属性和方法
function studentCreator(
  this: Student,
  name: string,
  age: number,
  grade: number
): Student {
  this.name = name
  this.age = age
  this.grade = grade
  return this
}
studentCreator.prototype.study = function () {
  console.log(`${this.name} is learning~~1`)
}

// ES6 class 中的 constructor 就是构造函数
class StudentClass implements Student {
  name: string
  age: number
  grade: number
  constructor(name: string, age: number, grade: number) {
    this.name = name
    this.age = age
    this.grade = grade
  }
  study() {
    console.log(`${this.name} is learning~~2`)
  }
}

const student_1: Student = new (studentCreator as any)('Lily', 13, 6)

const student_2: Student = new StudentClass('David', 16, 10)

console.log(student_1, student_2)
student_1.study()
student_2.study()
