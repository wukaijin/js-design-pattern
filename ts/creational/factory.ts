/*
 * @Author: Carlos
 * @Date: 2022-12-14 16:13:10
 * @LastEditTime: 2022-12-24 00:14:40
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

// type Factory = <T>(c: { new (): T }) => T

interface IUser {
  readonly role: Role
  readonly name: string
  auths: Auth[]
}
const superAdminAuths: Auth[] = [
  'register',
  'login',
  'setting',
  'home',
  'system'
]
const adminAuths: Auth[] = ['register', 'login', 'setting', 'home']
const userAuths: Auth[] = ['register', 'login', 'home']
const visitorAuths: Auth[] = ['register', 'login']
// const emptyAuths = []

class User implements IUser {
  readonly role: Role
  readonly name: string
  readonly auths: Auth[]
  constructor(role: Role, name: string, auths?: Auth[]) {
    this.role = role
    this.name = name
    this.auths = auths || []
  }
  static factory(role: Role, name: string): User {
    switch (role) {
      case 'superAdmin':
        return new User(role, name, superAdminAuths)
      case 'admin':
        return new User(role, name, adminAuths)
      case 'user':
        return new User(role, name, userAuths)
      case 'visitor':
        return new User(role, name, visitorAuths)
      default:
        return new User(role, name)
    }
  }
}
const superAdmin = User.factory('superAdmin', 'Mary')
const admin = User.factory('admin', 'Bob')
const user = User.factory('user', 'David')
const visitor = User.factory('visitor', 'Vik')

console.log(superAdmin, admin, user, visitor)
