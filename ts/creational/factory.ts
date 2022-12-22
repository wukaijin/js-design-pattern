/*
 * @Author: Carlos
 * @Date: 2022-12-14 16:13:10
 * @LastEditTime: 2022-12-22 23:39:35
 * @FilePath: /js-design-pattern/ts/creational/factory.ts
 * @Description: 
 */
/**
 * Factory Method (工厂模式)
 * 由一个工厂对象决定创建某种产品对象的类实例，主要创建`同一种`对象
 * 场景：
 * 根据角色类型，创建具有不同页面访问权限的用户
 */

type Role = 'superAdmin' | 'admin' | 'user' | 'visitor'
type Auth = 'register' | 'login' | 'setting' | 'home' | 'system'
interface User {
  role: Role
  auths: Auth[]
}
class User implements User {
  role: Role
  auths: Auth[]
  constructor(role: Role, auths?: Auth[]) {
    this.role = role
    this.auths = auths || []
  }
  static factory(role: Role): User {
    switch (role) {
      case 'superAdmin':
        return new User(role, [
          'register',
          'login',
          'setting',
          'home',
          'system'
        ])
      case 'admin':
        return new User(role, ['register', 'login', 'setting', 'home'])
      case 'user':
        return new User(role, ['register', 'login', 'home'])
      case 'visitor':
        return new User(role, ['register', 'login'])
      default:
        return new User(role)
    }
  }
}

console.log(
  User.factory('superAdmin'),
  User.factory('admin'),
  User.factory('user'),
  User.factory('visitor')
)
