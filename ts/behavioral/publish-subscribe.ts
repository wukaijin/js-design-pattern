/**
 * 发布/订阅模式 （Publish/Subscribe）
 * 这个模式其实是观察者模式的变种，在其基础上加入调度中心，达到订阅主题和观察者的完全解耦
 * Vue 中的 EventBus 和 Nodejs 中的 EventEmitter
 * 这两个是典型应用，其作用就是调度
 */

class EventEmitter<T> {
  callbacks: Record<string, Function[]> = {}
  on(type: string, cb: Function) {
    !this.callbacks[type] && (this.callbacks[type] = [])
    this.callbacks[type].push(cb)
  }
  off(type: string, cb?: Function) {
    if (!cb) {
      this.callbacks[type] = []
    } else {
      this.callbacks[type] = this.callbacks[type].filter(c => c !== cb)
    }
  }
  emit(type: string, ...arr: T[]) {
    ;(this.callbacks[type] || []).forEach(cb => cb(...arr))
  }
}

// 示例
class Server extends EventEmitter<string> {
  port: number = 3000
  requestHandler: Function
  constructor(requestHandler: Function) {
    super()
    this.requestHandler = requestHandler
  }
  listen(port: number) {
    this.port = port
    this.on('request', this.requestHandler)
    return this
  }
}

const server = new Server((data: string) => {
  console.log(`catch a request with ${data}`)
}).listen(3000)

server.emit('request', 'jsonData')

// 示例2，不使用继承

class Store {
  data: string = ''
  updateHandler?: Function
  update(data: string) {
    this.data = data
    this.updateHandler && this.updateHandler(data)
  }
  onUpdate(updateHandler: Function) {
    this.updateHandler = updateHandler
  }
}
class Component {
  constructor(data: string = '') {
    this.render(data)
  }
  render(data: string) {
    console.log('render data: ', data)
  }
}

const storeEvent = new EventEmitter()
const store = new Store()
store.onUpdate((data: string) => {
  storeEvent.emit('change', data)
})

const headerComponent = new Component()
const footerComponent = new Component()

storeEvent.on('change', (data: string) => {
  headerComponent.render(data)
  footerComponent.render(data)
})

store.update('Hello')
store.update('World')
