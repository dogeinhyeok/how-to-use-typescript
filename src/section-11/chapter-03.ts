/**
 * Exclude <T, U>
 * -> T에서 U와 겹치는 타입을 제외한 타입을 구하는 유틸리티 타입
 * -> T: 기준이 되는 유니온 타입
 * -> U: T에서 제외하고 싶은 타입
 */

// T가 U의 서브타입이면 never를, 아니면 T를 반환
type Exclude<T, U> = T extends U ? never : T;

// string | boolean 중에서 boolean을 제외하므로 string만 남음
type A = Exclude<string | boolean, boolean>;
// A의 타입은 string

/**
 * Extract <T, U>
 * -> T에서 U와 겹치는 타입만 추출하는 유틸리티 타입 (Exclude의 반대)
 * -> T: 기준이 되는 유니온 타입
 * -> U: T에서 추출하고 싶은 타입
 */

// T가 U의 서브타입이면 T를, 아니면 never를 반환
type Extract<T, U> = T extends U ? T : never;

// string | boolean 중에서 boolean과 겹치는 타입만 추출
type B = Extract<string | boolean, boolean>;
// B의 타입은 boolean

/**
 * ReturnType<T>
 * -> 함수의 반환 타입을 추출하는 유틸리티 타입
 * -> T: 반환 타입을 알고 싶은 함수의 타입
 * -> infer 키워드를 사용하여 반환 타입을 추론
 */

// 문자열을 반환하는 함수
function funcA() {
  return "hello";
}

// 숫자를 반환하는 함수
function funcB() {
  return 10;
}

// funcA의 반환 타입 추출 -> string
type ReturnA = ReturnType<typeof funcA>;

// funcB의 반환 타입 추출 -> number
type ReturnB = ReturnType<typeof funcB>;

// ReturnType 직접 구현
// T는 함수 타입만 받을 수 있도록 제한
// infer R로 반환 타입을 추론하여 R 타입을 반환
// 함수가 아닌 경우 never 반환
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
