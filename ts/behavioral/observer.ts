/**
 * 观察者模式 (Observer)
 *
 * 观察者模式包含观察目标（主体）和 观察者两类对象
 * 观察目标（主体）和 观察者是一对多的关系
 * 观察目标对象更改状态，其所有依赖项都会自动更新。
 */
type changeParams = Record<string, any>

class Observer {
  update(params: changeParams) {
    console.log(`update: ${JSON.stringify(params)}`)
  }
}

class Subject {
  denpendences: Observer[] = []
  add(denpendence: Observer) {
    if (this.denpendences.indexOf(denpendence) === -1) {
      this.denpendences.push(denpendence)
    }
  }
  remove(denpendence: Observer) {
    this.denpendences = this.denpendences.filter(d => d !== denpendence)
  }
  notify(params: changeParams) {
    this.denpendences.forEach(d => d.update(params))
  }
}


// 举例: 户主寄售房子，中介接收通知

// 更严格的写法应该是 class Host/Agent extends Subject, 再 new Host/Agent
const host = new Subject()
const agent1 = new Observer()
const agent2 = new Observer()
const agent3 = new Observer()
host.add(agent1)
host.add(agent2)
host.add(agent3)

host.notify({
  type: 'decrease',
  number: '1000'
})

host.remove(agent1)

host.notify({
  type: 'increase',
  number: '500'
})
