/**
 * 创建者模式 (Builder Pattern)
 * 将复杂对象的创建和表示分离，使得同样的构建过程可以创建不同的表示
 * 创建者模式是一步一步的创建一个复杂对象，它允许用户只通过指定复杂的对象的类型和内容，就可以构建他们，用户不需要指定其内部的具体构造细节。
 *
 */
class NavBar {
  constructor() {}
  init() {
    console.log('NavBar init')
  }
  getiData() {
    return new Promise<string>(resolve => {
      setTimeout(() => {
        console.log('NavBar getiData')
        resolve('data')
      }, 200)
    })
  }
  render() {
    console.log('NavBar render')
  }
}

class ContentList {
  constructor() {}
  init() {
    console.log('ContentList init')
  }
  getiData() {
    return new Promise<string>(resolve => {
      setTimeout(() => {
        console.log('ContentList getiData')
        resolve('data')
      }, 200)
    })
  }
  render() {
    console.log('ContentList render')
  }
}
type PageComponent = InstanceType<typeof NavBar> | InstanceType<typeof ContentList>

async function buildPage(comp: PageComponent) {
  comp.init()
  await comp.getiData()
  comp.render()
}

buildPage(new NavBar())
buildPage(new ContentList())


