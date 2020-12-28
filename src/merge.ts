interface AB {
  x: number;
}
interface AB {
  y: number;
}

// 声明合并

const addd: AB = {
  x: 1,
  y: 1,
};
// 函数和命名空间可以进行合并，namespace必须放到后面
function Lib() {}
namespace Lib {
  export const version = '1.0';
}
console.log(Lib.version);
