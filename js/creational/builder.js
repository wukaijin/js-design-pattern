"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * 创建者模式 (Builder Pattern)
 * 将复杂对象的创建和表示分离，使得同样的构建过程可以创建不同的表示
 * 创建者模式是一步一步的创建一个复杂对象，它允许用户只通过指定复杂的对象的类型和内容，就可以构建他们，用户不需要指定其内部的具体构造细节。
 *
 */
class NavBar {
    constructor() { }
    init() {
        console.log('NavBar init');
    }
    getiData() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('NavBar getiData');
                resolve('data');
            }, 200);
        });
    }
    render() {
        console.log('NavBar render');
    }
}
class ContentList {
    constructor() { }
    init() {
        console.log('ContentList init');
    }
    getiData() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('ContentList getiData');
                resolve('data');
            }, 200);
        });
    }
    render() {
        console.log('ContentList render');
    }
}
function buildPage(comp) {
    return __awaiter(this, void 0, void 0, function* () {
        comp.init();
        yield comp.getiData();
        comp.render();
    });
}
buildPage(new NavBar());
buildPage(new ContentList());
