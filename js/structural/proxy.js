"use strict";
/*
 * @Author: Carlos
 * @Date: 2022-12-15 16:56:16
 * @LastEditTime: 2022-12-23 21:18:33
 * @FilePath: /js-design-pattern/ts/structural/proxy.ts
 * @Description:
 * 代理模式 (Proxy)
 * 使用简单对象表示复杂对象，或为另一个对象提供占位符以控制对它的访问
 * ES6 Proxy 类是典型应用
 */
class Star {
    constructor(aliasName) {
        this.aliasName = aliasName;
    }
    show() {
        console.log(`${this.aliasName} is showing`);
    }
}
class StarProxy {
    constructor(star) {
        this.star = star;
    }
    show(currency) {
        if (currency < 100) {
            console.log(`${this.star.aliasName} deny to show`);
        }
        else {
            this.star.show();
        }
    }
}
const star = new Star('David');
const agent = new StarProxy(star);
agent.show(200);
agent.show(88);
// ES6 Proxy 应用示例
const vueData = {
    foo: 'foo',
    arr: [1, 2, 3]
};
const proxy = new Proxy(vueData, {
    get: (target, p) => {
        console.log(`collect dependencies about ${p.toString()}`);
        // @ts-ignore
        return target[p];
    },
    set: (target, p, newValue) => {
        // @ts-ignore
        target[p] = newValue;
        console.log(`notify dependencies to rerender about ${p.toString()}`);
        return true;
    }
});
proxy.foo;
proxy.foo = 'coo';
proxy.arr[0] = 0; // 无法劫持对象中的数组的直接赋值变化, vue3 中会再添加数组代理来劫持
console.log(vueData);
