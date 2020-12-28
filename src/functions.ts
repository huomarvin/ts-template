// 如下三种方式是等价的

// let add2: (x: number, y: number) => number;

// interface Add2 {
//   (x: number, y: number): number;
// }

// type 类型别名
type Add2 = (x: number, y: number) => number;

const add2: Add2 = (x, y) => x + y;

function add3(x: number, y: number) {
  return x + y;
}

function add5(x: number, y?: number) {
  return y ? x + y : x;
}
add5(1);

function add6(x: number, y = 0, z: number, q = 2) {
  return x + y + z + q;
}

function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur, 0);
}

// 函数重载

function add8(...rest: number[]): number;
function add8(...rest: string[]): string;

function add8(...rest: any[]): any {
  const first = rest[0];
  if (typeof first === 'string') {
    return rest.join('');
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur, 0);
  }
}
