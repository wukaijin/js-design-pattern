/*
 * @Author: Carlos
 * @Date: 2022-12-15 14:56:57
 * @LastEditTime: 2022-12-22 23:40:42
 * @FilePath: /js-design-pattern/ts/structural/adapter.ts
 * @Description: 
 */
/**
 * 适配器模式 (Adapter)
 * 抹平接口差异
 * 将现有接口转换为新接口，以实现不相关类的兼容性和可重用性，在一个应用程序中。也称为包装模式。
 */

class TencentSDK {
  receiver: string
  constructor(receiver: string) {
    this.receiver = receiver
  }
  pay(money: number) {
    console.log(`pay ${this.receiver} ￥${money}`)
  }
}

class AliSDK {
  recipient: string
  constructor(recipient: string) {
    this.recipient = recipient
  }
  give(money: number) {
    console.log(`pay ${this.recipient} ￥${money}`)
  }
}
// 实现一个阿里支付的适配器
class AliPayAdapter extends AliSDK {
  constructor(recipient: string) {
    super(recipient)
  }
  pay(money: number) {
    this.give(money)
  }
}

type PaySDK = TencentSDK | AliPayAdapter

function pay(sdk: PaySDK, money: number) {
  sdk.pay(money)
}

pay(new TencentSDK('David'), 13)
pay(new AliPayAdapter('Smith'), 20)
