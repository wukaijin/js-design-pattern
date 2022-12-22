"use strict";
class Observer {
    update(params) {
        console.log(`update: ${JSON.stringify(params)}`);
    }
}
class Subject {
    constructor() {
        this.dependencies = [];
    }
    add(dependency) {
        if (this.dependencies.indexOf(dependency) === -1) {
            this.dependencies.push(dependency);
        }
    }
    remove(dependency) {
        this.dependencies = this.dependencies.filter(d => d !== dependency);
    }
    notify(params) {
        this.dependencies.forEach(d => d.update(params));
    }
}
// 举例: 户主寄售房子，中介接收通知
// 更严格的写法应该是 class Host/Agent extends Subject, 再 new Host/Agent
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
