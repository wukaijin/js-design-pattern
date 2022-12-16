"use strict";
class Observer {
    update(params) {
        console.log(`update: ${JSON.stringify(params)}`);
    }
}
class Subject {
    constructor() {
        this.denpendences = [];
    }
    add(denpendence) {
        if (this.denpendences.indexOf(denpendence) === -1) {
            this.denpendences.push(denpendence);
        }
    }
    remove(denpendence) {
        this.denpendences = this.denpendences.filter(d => d !== denpendence);
    }
    notify(params) {
        this.denpendences.forEach(d => d.update(params));
    }
}
// 举例: 户主寄售房子，中介接收通知
const host = new Subject();
const agent1 = new Observer();
const agent2 = new Observer();
const agent3 = new Observer();
host.add(agent1);
host.add(agent2);
host.add(agent3);
host.notify({
    type: 'decrease',
    number: '1000'
});
host.remove(agent1);
host.notify({
    type: 'increase',
    number: '500'
});
