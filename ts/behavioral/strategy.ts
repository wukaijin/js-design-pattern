/**
 * 策略模式 (Strategy)
 * 将多个算法分组到一个模块中以提供可替换方案。也称为 Plicy Pattern
 * 通过对算法进行封装，分离算法的责任和逻辑，委派给不同的对象进行管理
 * 通常用于解决多重 if...else... 具有良好的扩展性
 * 举例：路由
 */

enum performanceLevel {
  A,
  B,
  C,
  D
}
const strategies: Record<performanceLevel, (base: number) => number> = {
  [performanceLevel.A]: (base: number) => base * 1.4,
  [performanceLevel.B]: (base: number) => base * 1.2,
  [performanceLevel.C]: (base: number) => base,
  [performanceLevel.D]: (base: number) => base * 0.8
}

function getPerformanceBonuses(level: performanceLevel, base: number) {
  return strategies[level](base)
}

console.log(
  getPerformanceBonuses(performanceLevel.A, 2000),
  getPerformanceBonuses(performanceLevel.D, 2000)
)
