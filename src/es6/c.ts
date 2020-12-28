import myFunction, {
  a, b, c, P, f as F,
} from './a';

import * as All from './a';
import myFunction from './a'; // 不加{} 默认导出

console.log(a, b, c);
console.log(All);
myFunction();
