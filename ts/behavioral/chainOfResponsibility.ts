/*
 * @Author: Carlos
 * @Date: 2022-12-22 17:30:50
 * @LastEditTime: 2022-12-22 23:15:41
 * @FilePath: /js-design-pattern/ts/behavioral/chainOfResponsibility.ts
 * @Description:
 * 职责链模式 (Chain of responsibility)
 * 为请求创建了一个接收者对象的链。这种模式给予请求的类型，对请求的发送者和接收者进行解耦。
 * 让多个对象都有可能接收请求，将这些对象连接成一条链，并且沿着这条链传递请求，直到有对象处理它为止。
 */
type Params = Record<string, string>
type Rule = (p: Params) => string | void

class Task {
  rule: Rule
  constructor(rule: Rule) {
    this.rule = rule
  }
  validate(value: Params) {
    return this.rule(value)
  }
}
class Validator {
  errors: string[] | null = null
  tasks: Task[] = []
  addTask(task: Task) {
    this.tasks.push(task)
    return this
  }
  validate(p: Params) {
    this.errors = null
    this.tasks.forEach(task => {
      const err = task.validate(p)
      if (err) {
        !this.errors && (this.errors = [])
        this.errors.push(err)
      }
    })
  }
}


const requireField = (field: string, errorTip: string) => (p: Params) => {
  if (!p[field]) return errorTip
}
const lengthMaxLimit =
  (field: string, errorTip: string, max: number) => (p: Params) =>
    p[field].length > max ? errorTip : undefined
const requireName = requireField('name', '昵称不能为空')
const requirePwd = requireField('password', '密码不能为空')
const requireDoublePwd = requireField('doublePassword', '确认密码不能为空')
const maxName = lengthMaxLimit('name', '昵称最多10个字符', 10)
const maxPwd = lengthMaxLimit('password', '密码最多12位', 12)
const eqPwd = (p: Params) =>
  p['password'] !== p['doublePassword'] ? '两次密码不一致' : undefined


const registerValidator = new Validator()
registerValidator
  .addTask(new Task(requireName))
  .addTask(new Task(requirePwd))
  .addTask(new Task(requireDoublePwd))
  .addTask(new Task(maxName))
  .addTask(new Task(maxPwd))
  .addTask(new Task(eqPwd))

registerValidator.validate({
  name: 'abcdefghijklmnopqrstuvwxyz',
  password: '1234567890abc',
  doublePassword: '1234567890abc',
})
console.log(registerValidator.errors)

registerValidator.validate({
  name: '',
  password: '123',
  doublePassword: 'xxxxx',
})
console.log(registerValidator.errors)