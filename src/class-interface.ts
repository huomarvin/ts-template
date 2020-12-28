interface Human {
  name: string;
  eat(): void;
}

class Asian implements Human {
  name: string = '';

  eat(): void {
    throw new Error('Method not implemented.');
  }
}

interface Man extends Human {
  run(): void;
}
interface Child {
  cry(): void;
}

// 接口只能约束类的共有成员
interface Boy extends Man, Child {}

class Auto {
  state = 1;
}

interface AutoInterface extends Auto {}

class C implements AutoInterface {
  state = 2;
}

class Bus extends Auto implements AutoInterface {}
