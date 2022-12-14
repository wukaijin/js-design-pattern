"use strict";
/**
 * 单例模式 (Singleton)
 * 保证一个类仅有一个实例，并提供一个全局访问入口
 * 主要解决一个全局或多处使用的类，频繁的创建或销毁实例，占用内存和消耗性能问题，或者是为了保存统一配置或数据
 * 早期的 JQuery, Vuex 都是其典型应用
 */
// JavaScript 早期常用自执行函数来做单例
var JQuery = (function () {
    var $;
    // 用 class 是为了配合 ts, es5 是用 function + prototype 的方式
    class _JQuery {
        text() {
            console.log('render innerText of HTMLElement');
        }
        html() {
            console.log('render innerHTML of HTMLElement');
        }
    }
    return function () {
        if ($)
            return $;
        return ($ = new _JQuery());
    };
})();
console.log('JQuery: ', JQuery() === JQuery());
// ES6 的单例一般直接用 class 实现
class Vuex {
    constructor() {
        if (!Vuex.store) {
            Vuex.store = this; // ! important
        }
        return Vuex.store;
    }
}
new Vuex();
console.log('Vuex: ', new Vuex() === new Vuex());
console.log('Vuex store: ', new Vuex() === Vuex.store);
console.log('test');
