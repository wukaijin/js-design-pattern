# JavaScript 设计模式
个人项目，仅是重学设计模式过程中做些记录。  
因个人兴趣，尝试以`TypeScript`语法基于`Node`运行。

`/js` 下是编译后代码，实际代码在 `/ts`


## 设计模式的六大原则
1. 开闭原则（Open Close Principle）

    开闭原则的意思是：对扩展开放，对修改关闭。在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。简言之，是为了使程序的扩展性好，易于维护和升级。想要达到这样的 效果，我们需要使用接口和抽象类，后面的具体设计中我们会提到这点。

2. 里氏代换原则（Liskov Substitution Principle）

    里氏代换原则是面向对象设计的基本原则之一。 里氏代换原则中说，任何基类可以出现的地方，子类一定可以出现。LSP 是继承复用的基石，只有当派生类可以替换掉基类，且软件单位的功能不受到影响时，基类才能真正被复用，而派生类也能够在基类的基础上增加新的行为。里氏代换原则是对开闭原则的补充。实现开闭原则的关键步骤就是抽象化，而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范。

3. 依赖倒转原则（Dependence Inversion Principle）

    这个原则是开闭原则的基础，具体内容：针对接口编程，依赖于抽象而不依赖于具体。

4. 接口隔离原则（Interface Segregation Principle）

    这个原则的意思是：使用多个隔离的接口，比使用单个接口要好。它还有另外一个意思是：降低类之间的耦合度。由此可见，其实设计模式就是从大型软件架构出发. 便于升级和维护的软件设计思想，它强调降低依赖，降低耦合。

5. 迪米特法则，又称最少知道原则（Demeter Principle）

    最少知道原则是指：一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。

6. 合成复用原则（Composite Reuse Principle）

    合成复用原则是指：尽量使用合成/聚合的方式，而不是使用继承。


##  1. Creational Patterns

### Abstract Factory
    Provides one level of interface higher than the factory pattern. It is used to return one of several factories.
### Builder
    Construct a complex object from simple objects step by step.
### Factory Method
    Provides an abstraction or an interface and lets subclass or implementing classes decide which class or method should be
    instantiated or called, based on the conditions or parameters given.
### Prototype
    Cloning an object by reducing the cost of creation.
### Singleton
    One instance of a class or one value accessible globally in an application.

##  2. Structural Patterns

### Adapter
    Convert the existing interfaces to a new interface to achieve compatibility and reusability of the unrelated classes
    in one application. Also known as Wrapper pattern.
### Bridge
    Decouple an abstraction or interface from its implementation so that the two can vary independently.
### Composite
    Build a complex object out of elemental objects and itself like a tree structure.
### Decorator
    add additional features or behaviors to a particular instance of a class, while not modifying the other instances of same class
### Facade
    Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use. Wrap a complicated subsystem with a simpler interface.
### Flyweight
    Make instances of classes on the fly to improve performance efficiently, like individual characters or icons on the screen.
### Proxy
    Use a simple object to represent a complex one or provide a placeholder for another object to control access to it.

##  3. Behavioral Patterns

### Chain of Responsibility
    Let more than one object handle a request without their knowing each other. Pass the request to chained objects until
    it has been handled.
### Command
    Streamlize objects by providing an interface to encapsulate a request and make the interface implemented by subclasses
    in order to parameterize the clients.
### Interpreter
    Provides a definition of a macro language or syntax and parsing into objects in a program.
### Iterator
    Define an object that encapsulates details and other objects interact with such object. The relationships are loosely decoupled.
### Mediator
    Decouple the direct communication between objects by introducing a middle object, the mediator, that facilitates the communication between the objects.
### Memento
    To record an object internal state without violating encapsulation and reclaim it later without knowledge of the original object.
### Observer
    One object changes state, all of its dependents are updated automatically.
### State
    An object's behavior change is represented by its member classes, which share the same super class.
### Strategy
    Group several algorithms in a single module to provide alternatives. Also known as policy.
### Template Method
    Provide an abstract definition for a method or a class and redefine its behavior later or on the fly without changing its structure.
### Visitor
    Define a new operation to deal with the classes of the elements without changing their structures.