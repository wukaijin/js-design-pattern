"use strict";
/*
 * @Author: Carlos
 * @Date: 2022-12-15 16:22:52
 * @LastEditTime: 2022-12-22 23:35:44
 * @FilePath: /js-design-pattern/ts/behavioral/strategy.ts
 * @Description:
 */
/**
 * 策略模式 (Strategy)
 * 将多个算法分组到一个模块中以提供可替换方案。也称为 Policy Pattern
 * 通过对算法进行封装，分离算法的责任和逻辑，委派给不同的对象进行管理
 * 通常用于解决多重 if...else... 具有良好的扩展性
 * 举例：路由
 */
var performanceLevel;
(function (performanceLevel) {
    performanceLevel[performanceLevel["A"] = 0] = "A";
    performanceLevel[performanceLevel["B"] = 1] = "B";
    performanceLevel[performanceLevel["C"] = 2] = "C";
    performanceLevel[performanceLevel["D"] = 3] = "D";
})(performanceLevel || (performanceLevel = {}));
const strategies = {
    [performanceLevel.A]: (base) => base * 1.4,
    [performanceLevel.B]: (base) => base * 1.2,
    [performanceLevel.C]: (base) => base,
    [performanceLevel.D]: (base) => base * 0.8
};
function getPerformanceBonuses(level, base) {
    return strategies[level](base);
}
console.log(getPerformanceBonuses(performanceLevel.A, 2000), getPerformanceBonuses(performanceLevel.D, 2000));
