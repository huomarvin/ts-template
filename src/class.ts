class Dog {
  constructor(name: string) {
    this.name = name;
  }

  name: string;

  run() {}

  private pri() {} // 私有修饰符修饰的函数仅可在类内部被调用

  protected pro() {} // protected修饰的函数或变量可以被子类调用或者覆盖，不可在实例上进行调用

  static legs: number = 4; // static修饰的函数或变量仅可在类上进行调用
}
console.log(Dog);
// 类的函数挂载在原型上
console.log(Dog.prototype);
// 类的属性挂载到对象上
const dog = new Dog('wangwang');
console.log(dog);
console.log(Dog.legs);
class Husky extends Dog {
  // color: string;
  // 构造函数上的修饰符可以避免二次声明
  constructor(public color: string) {
    super('Husky');
    this.color = color;
  }
}

abstract class Animal {
  eat() {
    console.log('eat');
  }

  abstract sleep(): void;
}

class Bird extends Animal {
  sleep() {
    console.log('Bird sleep');
  }
}
class Cat extends Animal {
  sleep() {
    console.log('Cat sleep');
  }
}
const bird = new Bird();
const cat = new Cat();

const animals: Animal[] = [bird, cat];
animals.forEach((animal) => animal.sleep());

class WorkFlow {
  step1() {
    return this;
  }

  step2() {
    return this;
  }
}

class MyFlow extends WorkFlow {
  next() {
    return this;
  }
}

new MyFlow().step1().step2().next()
  .step2();
