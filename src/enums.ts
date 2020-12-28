// 数字枚举 如果没有设置默认值，默认是从0开始计数
enum Role {
  Reporter = 1,
  Guest,
}
console.log(Role.Reporter);

// 枚举类型
enum E {
  a,
  b,
}
enum F {
  a = 0,
  b = 1,
}
enum G {
  a = 'apple',
  b = 'banana',
}
