"use strict";
/**
 * 装饰器模式 (Decorator)
 * 对已有功能进行扩展，不改动原有的代码，对其他业务造成的影响。
 * TypeScript 中有装饰器， 但是必须额外添加配置
 * * 比较经典的应用场景，是页面点击事件跳转页面前的统计 PV（page view）
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const gitignore = path_1.default.resolve(__dirname, '../../', '.gitignore');
// interface Function {
//   before(): void
// }
// @ts-ignore
Function.prototype.before = function (beforeFn) {
    const originalFn = this;
    return function () {
        beforeFn.apply(this, arguments);
        return originalFn.apply(this, arguments);
    };
};
const appendFile = (filePath, data) => {
    fs_1.default.appendFileSync(filePath, data);
};
function logChange(content) {
    console.log('change: ', content);
}
// @ts-ignore
const appendFileAndLog = appendFile.before(logChange);
appendFile(gitignore, '\r\nsomethings');
appendFileAndLog(gitignore, '\r\nsomethings with log');
// echo separator
console.log(Array.from(new Array(30)).join('='));
// TypeScript 中的装饰器， 展示部分功能。
// 简单使用， 直接装饰 class， log会提前执行 (声明D ump 的时候)
function log(str) {
    return function (target) {
        console.log(str + ' log');
    };
}
let Dump = class Dump {
    constructor() { }
};
Dump = __decorate([
    log('@')
], Dump);
// new Dump()
// 复杂应用，事件附加 PV
function PV(str) {
    return function (target, methodName, descriptor) {
        const originalFn = descriptor.value;
        // 拦截重写方法
        descriptor.value = function () {
            console.log(`${str} PV data send`);
            originalFn.apply(this, arguments);
        };
    };
}
class ClickEvent {
    linkToPage() {
        console.log('linkToPage');
    }
}
__decorate([
    PV('home')
], ClickEvent.prototype, "linkToPage", null);
const event = new ClickEvent();
event.linkToPage();
