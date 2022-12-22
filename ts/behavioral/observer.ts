/*
 * @Author: Carlos
 * @Date: 2022-12-16 10:00:40
 * @LastEditTime: 2022-12-22 23:35:30
 * @FilePath: /js-design-pattern/ts/behavioral/observer.ts
 * @Description: 
 */
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
  dependencies: Observer[] = []
  add(dependency: Observer) {
    if (this.dependencies.indexOf(dependency) === -1) {
      this.dependencies.push(dependency)
    }
  }
  remove(dependency: Observer) {
    this.dependencies = this.dependencies.filter(d => d !== dependency)
  }
  notify(params: changeParams) {
    this.dependencies.forEach(d => d.update(params))
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
