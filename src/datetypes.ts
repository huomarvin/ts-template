// 原始类型
const bool: boolean = true;
const num: number = 123;
const str: string = 'abc';

// 数组
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

// 元祖
const tuple: [number, string] = [1, '2'];
// 元祖可以push进入，但是编译的时候不能获取下标为2的元祖
// tuple.push(2);
// tuple[2];

// 函数
const add = (x: number, y: number) => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

// 对象
const obj: { x: number; y: number } = { x: 1, y: 2 };

// symbol
const s1: symbol = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false

// js中 undefined和null是任何类型的子类型
const un: undefined;
const nu: null = null;
// ts中严格检查，如果想关闭该功能，需要设置strictNummCheck:false
// num = undefined
// num = null

// void 返回值为undefined
// void 0 会一直返回undefined， 因为undefined可以被覆盖
const noReturn = () => {};

// never 永远不会有返回值
const error = () => {
  throw new Error('error');
};
