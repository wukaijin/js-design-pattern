"use strict";
class Task {
    constructor(rule) {
        this.rule = rule;
    }
    validate(value) {
        return this.rule(value);
    }
}
class Validator {
    constructor() {
        this.errors = null;
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
        return this;
    }
    validate(p) {
        this.errors = null;
        this.tasks.forEach(task => {
            const err = task.validate(p);
            if (err) {
                !this.errors && (this.errors = []);
                this.errors.push(err);
            }
        });
    }
}
const requireField = (field, errorTip) => (p) => {
    if (!p[field])
        return errorTip;
};
const lengthMaxLimit = (field, errorTip, max) => (p) => p[field].length > max ? errorTip : undefined;
const requireName = requireField('name', '昵称不能为空');
const requirePwd = requireField('password', '密码不能为空');
const requireDoublePwd = requireField('doublePassword', '确认密码不能为空');
const maxName = lengthMaxLimit('name', '昵称最多10个字符', 10);
const maxPwd = lengthMaxLimit('password', '密码最多12位', 12);
const eqPwd = (p) => p['password'] !== p['doublePassword'] ? '两次密码不一致' : undefined;
const registerValidator = new Validator();
registerValidator
    .addTask(new Task(requireName))
    .addTask(new Task(requirePwd))
    .addTask(new Task(requireDoublePwd))
    .addTask(new Task(maxName))
    .addTask(new Task(maxPwd))
    .addTask(new Task(eqPwd));
registerValidator.validate({
    name: 'abcdefghijklmnopqrstuvwxyz',
    password: '1234567890abc',
    doublePassword: '1234567890abc',
});
console.log(registerValidator.errors);
registerValidator.validate({
    name: '',
    password: '123',
    doublePassword: 'xxxxx',
});
console.log(registerValidator.errors);
