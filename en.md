
#  1. Creational Patterns

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

#  2. Structural Patterns

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

#  3. Behavioral Patterns

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