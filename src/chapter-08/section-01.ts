/**
 * 제네릭
 */

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUpperCase();

if (typeof num === "number") {
  num.toFixed();
}

/**
 * 제네릭 타입 제한
 */

let bool = func(true);
let str = func("string");
let arr = func<[number, number, number]>([1, 2, 3]);
