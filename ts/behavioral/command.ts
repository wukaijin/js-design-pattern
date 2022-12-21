/*
 * @Author: Carlos
 * @Date: 2022-12-19 16:26:03
 * @LastEditTime: 2022-12-21 14:04:19
 * @FilePath: /js-design-pattern/ts/behavioral/command.ts
 * @Description: 
 * 命令模式 (Command)
 * 命令模式（Command Pattern）是一种数据驱动的设计模式。
 * 请求以命令的形式包裹在对象中，并传给调用对象。
 * 调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。
 * 命令模式一般由三种角色构成：
 *  1. 发布者(invoker): 发出命令，调用命令对象，不与实际执行对象关联
 *  2. 接受者(receiver): 提供对应接口处理请求，不知道谁发起请求
 *  3. 命令对象(command): 接收命令，调用接收者处理发布者的请求 （middle）
 */

// 随便以空调举例 (空调 - 命令对象 - 遥控)
type commandType = 'on'
// type commandType = 'on' | 'off' | 'up' | 'down'

class AirCondition {
  on () {
    console.log('AirCondition turn on.')
  }
}

class ServiceCommand {
  airCondition: AirCondition
  constructor (airC: AirCondition) {
    this.airCondition = airC
  }
  execute(type: commandType) {
      if (typeof this.airCondition[type] === 'function') {
        this.airCondition[type]()
      }
  }
}

class Remote {
  command: ServiceCommand
  constructor (command: ServiceCommand) {
    this.command = command
  }
  on () {
    this.command.execute('on')
  }
}

const airCondition = new AirCondition()
const command = new ServiceCommand(airCondition)
const remote = new Remote(command)

remote.on()