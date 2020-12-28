// 类型推断
const a = 1;
const b = [1];

window.onkeydown = (event: KeyboardEvent) => {};

// 接口兼容性
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}
let x: X = { a: 1, b: 2 };
const y: Y = { a: 1, b: 2, c: 3 };
x = y;
// y = x; 报错~

// 函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}

const handler1 = (a: number) => {};
hof(handler1);
const handler2 = (a: number, b: number, c: number) => {};
// hof(handler2)

// 可选参数和剩余参数
let fa = (p1: number, p2: number) => {};
const fb = (p1?: number, p2?: number) => {};
let fc = (...args: number[]) => {};
// 固定参数可以兼容可选参数和可变参数
fa = fb;
fa = fc;
// fb = fc;
// fb = fa;
fc = fa;
fc = fb;

// 参数类型
const hanlder3 = (a: string) => {};
// hof(hanlder3)

interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
// 参数多的可以兼容参数少的
let p3d = (point: Point3D) => {};
const p2d = (point: Point2D) => {};
p3d = p2d;
// p2d = p3d

function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}

// 枚举兼容性 数字和枚举是兼容的，不同的枚举是互相不兼容的
enum Fruit {
  Apple,
  Banana,
}
enum Color {
  Red,
  Yellow,
}

const fruit: Fruit.Apple = 3;
const no: number = Fruit.Apple;
// let color: Color.Red = Fruit.Apple
// 类兼容性
class A {
  constructor(p: number, q: number) {}

  id: number = 1;
}
class B {
  static s = 1;

  constructor(p: number) {}

  id: number = 2;

  private name: string = '';
}

let aa = new A(1, 2);
const bb = new B(1);
aa = bb;
// bb = aa;

/**
 * 当一个类型Y可以被赋值给另外一个类型X时，我们就说类型X兼容类型Y
 * 结构之间兼容：成员少的兼容成员多的
 * 函数之间兼容：参数多的兼容参数少的
 */
enum Type {
  STRONG,
  WEAK,
}

class Java {
  helloJava() {
    console.log('Hello JAVA');
  }
}
class JavaScript {
  helloJavaScript() {
    console.log('Hello Java Script');
  }
}

// 类型谓词
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

// 类型保护
function getLanguage(type: Type, x: string | number) {
  const lang = type === Type.STRONG ? new Java() : new JavaScript();
  console.log('lang', lang);
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }
  // if (lang instanceof Java) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }
  // 没好用
  // if ("java" in lang) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }
  // if (typeof x === "string") {
  //   console.log(x.length);
  // } else {
  //   x.toFixed(2);
  // }
  return lang;
}

// getLanguage(Type.STRONG);
// getLanguage(Type.WEAK);

// 交叉类型和联合类型
interface DogInterface {
  run(): void;
}
interface CatInterface {
  jump(): void;
}

type Pet = DogInterface & CatInterface;

class Dog2 implements DogInterface {
  run() {}

  eat() {}
}

class Cat2 implements CatInterface {
  jump() {}

  eat() {}
}

const a2: number | string = 'a';
let b2: 'a' | 'b' | 'c';
let c2: 1 | 2 | 3;

enum Master {
  Boy,
  Girl,
}
function getPet(master: Master) {
  const pet = master === Master.Boy ? new Dog2() : new Cat2();
  return pet;
}

interface Square {
  kind: 'square';
  size: number;
}
interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}
interface Circle {
  kind: 'circle';
  r: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape): number {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.r * s.r;
    default:
      return ((e: never) => {
        throw new Error(e);
      })(s);
  }
}
// console.log(area({ kind: "circle", r: 1 }));

const obj4 = {
  a: 1,
  b: 2,
  c: '3',
};

function getValue(obj: any, keys: string[]) {
  return keys.map((item) => obj[item]);
}

console.log(getValue(obj4, ['a', 'b']));

interface Obj {
  a: number;
  b: string;
}

let key: keyof Obj;

let value: Obj['a'];
// 索引类型
function getValue2<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((item) => obj[item]);
}

// getValue2(obj4, ["x"]);

// 映射类型
interface Obj5 {
  a: string;
  b: number;
  c: boolean;
}
type ReadonlyObj = Readonly<Obj5>;
type PartialObj = Partial<Obj5>;
type PickObj = Pick<Obj5, 'a' | 'b'>;
type RecordObj = Record<'x' | 'y', Obj5>;

// 条件类型
type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

type T1 = TypeName<string>;
type T2 = TypeName<string[]>;

// (A | B) extends U ? X : Y
// (A extends U ? X:Y) | (B extends U ? X: Y)
type T3 = TypeName<string | string[]>;

type Diff<T, U> = T extends U ? never : T;

type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>;

type NotNull<T> = Diff<T, undefined | null>;

type T5 = NotNull<string | number | undefined | null>;

// Exclude<T,U> 获取T中含有但是U中不含有的
// NonNullable<T> 获取非空的
// Extract<T, U> 获取T和U中都含有的

type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>;

type T7 = ReturnType<() => string>;
