// 类型断言
// {} as Result
// <Reuslt>{}
// [x: string]: any;
interface List {
  readonly id: number;
  name: string;
  [x: string]: any;
  age?: number;
}
interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
  });
}
const result = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B', age: 30 },
  ],
};

render(result);

// 数字索引
interface StringArray {
  [index: number]: string;
}
// 字符串索引
interface Names {
  [x: string]: string;
}

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  const lib: Lib = (() => {}) as Lib;
  lib.version = '1.0';
  lib.doSomething = () => {};
  return lib;
}

const lib1 = getLib();
lib1();
lib1.doSomething();
