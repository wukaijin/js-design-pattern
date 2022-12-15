/**
 * 适配器模式 (Adapter)
 * 抹平接口差异
 * 将现有接口转换为新接口，以实现不相关类的兼容性和可重用性，在一个应用程序中。也称为包装模式。
 */

class TencentSDK {
  reciver: string
  constructor(reciver: string) {
    this.reciver = reciver
  }
  pay(money: number) {
    console.log(`pay ${this.reciver} ￥${money}`)
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
