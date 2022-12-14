/**
 * 抽象工厂模式 (Abstract Factory)
 * 顾名思义，抽象工厂模式并不直接产生实例，而是用于对产品类簇的创建
 * TypeScript 中有所谓的抽象类，是其一定的应用
 * JavaScript 中会狭义一些，更多代表的生成工厂的方法
 */

/**
 *  TypeScript 示例场景
 * 几何体不能直接实例化，并包含计算面积的抽象方法
 * 圆形，正方形，正三角形继承自抽象类几何体，自行实现抽象方法
 */

abstract class Geometry {
  abstract getArea(): number
  echoArea() {
    console.log(
      Object.getPrototypeOf.call(this, this).constructor.name,
      this.getArea()
    )
  }
}

class Circle extends Geometry {
  r: number
  constructor(r: number) {
    super()
    this.r = r
  }
  getArea() {
    return Math.PI * Math.pow(this.r, 2)
  }
}

class Square extends Geometry {
  w: number
  constructor(w: number) {
    super()
    this.w = w
  }
  getArea() {
    return Math.pow(this.w, 2)
  }
}

class EquilateralTriangle extends Geometry {
  h: number
  constructor(w: number) {
    super()
    this.h = w
  }
  getArea() {
    return Math.pow(this.h, 2) / 2
  }
}

const circle = new Circle(2)
const square = new Square(4)
const equilateralTriangle = new EquilateralTriangle(4)

circle.echoArea()
square.echoArea()
equilateralTriangle.echoArea()

// echo separator
console.log(Array.from(new Array(30)).join('='))


/**
 * JavaScript 的应用大致是这样, 比较冗余，并不常用
 */

type Type = 'circle' | 'square' | 'equilateralTriangle'

function getGeometryFactory(type: Type) {
  switch (type) {
    case 'circle':
      return Circle
      case 'square':
        return Square
        case 'equilateralTriangle':
      return EquilateralTriangle
    default:
      throw new Error('not collect type')
  }
}

const Geom1 = getGeometryFactory('circle')
const Geom2 = getGeometryFactory('square')
const Geom3 = getGeometryFactory('equilateralTriangle')
const circle2 = new Geom1(1)
const square2 = new Geom2(1)
const equilateralTriangle2 = new Geom2(1)
circle2.echoArea()
square2.echoArea()
equilateralTriangle2.echoArea()
