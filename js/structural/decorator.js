"use strict";
/**
 * 装饰器模式 (Decorator)
 * 对已有功能进行扩展，不改动原有的代码，对其他业务造成的影响。
 * ES5 示例是覆写了方法，有其局限性
 * TypeScript 中有装饰器， 但是必须额外添加配置
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
        const _that = this;
        beforeFn.apply(_that, arguments);
        return originalFn.apply(_that, arguments);
    };
};
let appendFile = (filePath, data) => {
    fs_1.default.appendFileSync(filePath, data);
};
function logChange(content) {
    console.log('change: ', content);
}
// @ts-ignore
appendFile = appendFile.before(logChange);
appendFile(gitignore, '\r\nsomethings');
// echo separator
console.log(Array.from(new Array(30)).join('='));
// TypeScript 中的装饰器， 展示部分功能
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
new Dump();
