/**
 * void 타입
 * -> 함수에서 아무것도 반환하지 않을 때 사용
 * -> 함수에서 반환 타입을 void로 선언하면 함수는 반환 값을 반환하지 않음
 */

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

/**
 * never 타입
 * -> 존재하지 않는
 * -> 불가능한 타입
 */

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let anyVar: any;

let a: never;
