/*
 * @Author: Carlos
 * @Date: 2022-12-21 14:42:37
 * @LastEditTime: 2022-12-21 15:04:31
 * @FilePath: /js-design-pattern/ts/behavioral/template.ts
 * @Description:
 * 模板方法模式 (Template)
 * 在模板模式（Template Pattern）中，一个抽象类公开定义了执行它的方法的方式/模板。它的子类可以按需要重写方法实现，但调用将以抽象类中定义的方式进行。
 * 定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤
 */

class CanvasCard {
  ctx: CanvasRenderingContext2D
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }
  drawCircleImage(path: string, x: number, y: number, r: number) {
    const img = new Image()
    img.src = path
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.arc(x, y, r, 0, 2 * Math.PI)
    this.ctx.stroke()
    this.ctx.clip()
    this.ctx.drawImage(img, x - r, y - r, r * 2, r * 2)
    this.ctx.restore()
  }
}

class BusinessCard extends CanvasCard {
  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx)
    // ... other operations
    this.drewAvatar('http://avatar.jpg', 120, 20, 25)
    this.drewLogo('http://logo.jpg', 20, 20, 8)
  }
  drewAvatar(path: string, x: number, y: number, r: number) {
    this.drawCircleImage(path, x, y, r)
  }
  drewLogo(path: string, x: number, y: number, r: number) {
    this.drawCircleImage(path, x, y, r)
  }
}

const canvas: HTMLCanvasElement | null = document.querySelector('canvas')
const ctx = canvas?.getContext('2d')
if (ctx) {
  const businessCard = new BusinessCard(ctx)
}
