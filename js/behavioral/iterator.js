"use strict";
/*
 * @Author: Carlos
 * @Date: 2022-12-21 15:07:09
 * @LastEditTime: 2022-12-22 23:31:33
 * @FilePath: /js-design-pattern/ts/behavioral/iterator.ts
 * @Description:
 * 迭代器模式 (Iterator)
 * 指提供一种方法，顺序访问某哥聚合对象中的各个元素，而不需要暴露该对象的内部表示。
 * 迭代器模式可以把迭代的过程从业务逻辑中分离出来，即使用迭代器模式之后，
 * 既不关心对象内部构造，也可以按顺序访问其中的每个元素。
 * ES6 内置了 Generator 函数，可以生成 Iterator，用 for on/in 访问
 */
class Fiber {
    constructor(state = '') {
        this.state = '';
        this.state = state;
        this.children = [];
    }
    getLastChild() {
        let lastChild = this.child;
        while (lastChild === null || lastChild === void 0 ? void 0 : lastChild.sibling) {
            lastChild = lastChild.sibling;
        }
        return lastChild;
    }
    append(child) {
        this.children.push(child);
        if (!this.child) {
            this.child = child;
        }
        else {
            this.getLastChild().sibling = child;
        }
        child.return = this;
        return this;
    }
}
const root = new Fiber('root');
const n_2 = new Fiber('2');
const n_1 = new Fiber('1');
root.append(n_1).append(n_2);
const n_1_1 = new Fiber('1_1');
n_1.append(n_1_1);
const n_2_1 = new Fiber('2_1');
const n_2_2 = new Fiber('2_2');
const n_2_3 = new Fiber('2_3');
n_2.append(n_2_1).append(n_2_2).append(n_2_3);
const n_2_2_1 = new Fiber('2_2_1');
const n_2_2_2 = new Fiber('2_2_2');
n_2_2.append(n_2_2_1).append(n_2_2_2);
// ES5
function each(root, callback) {
    let currentNode = root;
    currentNode && callback(currentNode);
    if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.children.length) {
        // forEach
        for (let i = 0; i < currentNode.children.length; i++) {
            const node = currentNode.children[i];
            each(node, callback);
        }
    }
}
each(root, (node) => console.log(node.state));
/* echo separator */
console.log(Array.from(new Array(30)).join('='));
/* echo separator */
// 先序遍历
function* generateFiber(root) {
    let currentNode = root;
    while (true) {
        // forEach
        if (!currentNode)
            return;
        yield currentNode;
        if (currentNode.child) {
            currentNode = currentNode.child;
            continue;
        }
        if (currentNode === root) {
            break;
        }
        while (!currentNode || !currentNode.sibling) {
            if (!currentNode.return || currentNode.return === root) {
                return;
            }
            currentNode = currentNode.return;
        }
        currentNode = currentNode.sibling;
    }
}
const iteratorFiber = generateFiber(root);
for (const iterator of iteratorFiber) {
    console.log(iterator.state);
}
