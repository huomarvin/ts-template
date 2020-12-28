function log<T>(value: T): T {
  console.log(value);
  return value;
}

log<string>('a');
log<string[]>(['a', 'b']);
// type Log = <T>(value:T) => T
// let myLog:Log = log;

interface Log<T> {
  (value: T): T;
}

const myLog: Log<number> = log;

// 泛型不可以应用到静态成员
class Log2<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

// 类型约束
interface Length {
  length: number;
}

function log3<T extends Length>(value: T): T {
  console.log(value.length);
  return value;
}
