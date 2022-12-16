/**
 * 桥接模式 （Bridge）
 * 这个模式在前端应用还是比较生硬的，有点难理解。
 * 关键词是`多维度，增加复杂度，解藕`
 * 桥接模式（Bridge Pattern）是用于把抽象化与实现化解耦，使得二者可以独立变化。
 * 它通过提供抽象化和实现化之间的桥接结构，来实现二者的解耦。
 * 这种模式涉及到一个作为桥接的接口，使得实体类的功能独立于接口实现类。
 * 这两种类型的类可被结构化改变而互不影响。将抽象部分与实现部分分离，使它们都可以独立的变化。
 */



// 比较难举例唉
interface IanimationLib {
  hide: (str: string) => void
  show: (str: string) => void
}

class DialogComponent {
  animation: IanimationLib
  name: string = ''
  constructor(animation: IanimationLib) {
    this.animation = animation
  }
  show() {
    this.animation.show(this.name)
  }
  hide() {
    this.animation.hide(this.name)
  }
}
class Madal extends DialogComponent {
  name: string = 'Madal'
}
class Message extends DialogComponent {
  name: string = 'Message'
}
class Toast extends DialogComponent {
  name: string = 'Toast'
}

const logWithName = (str: string) => (str2: string) => console.log(str2, str)

const Animations: Record<string, IanimationLib> = {
  bounce: {
    show: logWithName('bounce.show'),
    hide: logWithName('bounce.hide')
  },
  slide: {
    show: logWithName('slide.show'),
    hide: logWithName('slide.hide')
  },
  rotate: {
    show: logWithName('rotate.show'),
    hide: logWithName('rotate.hide')
  }
}
const madal = new Madal(Animations.slide)
const message = new Message(Animations.bounce)

madal.show()
message.hide()