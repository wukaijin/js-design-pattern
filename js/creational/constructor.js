"use strict";
/*
 * @Author: Carlos
 * @Date: 2022-12-14 11:44:17
 * @LastEditTime: 2022-12-24 00:16:51
 * @FilePath: /js-design-pattern/ts/creational/constructor.ts
 * @Description:
 * 构造器模式 (Constructor)
 * 构造器模式并未在常规的23模式命名中，但 JS 中常用这种说法，列出参考
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClass = exports.createStudent = void 0;
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
function createStudent(name, age, grade) {
    return {
        name,
        age,
        grade
    };
}
exports.createStudent = createStudent;
// ES6 class 中的 constructor 就是构造函数
class StudentClass {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}
exports.StudentClass = StudentClass;
const student_1 = createStudent('Lily', 13, 6);
const student_2 = new StudentClass('David', 16, 10);
console.log(student_1, student_2);
