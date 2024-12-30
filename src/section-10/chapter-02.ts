/**
 * 분산적인 조건부 타입
 * -> 유니온 타입을 조건부 타입으로 검사할 때 발생하는 현상
 * -> 유니온 타입의 각 멤버를 하나씩 검사하여 결과를 다시 유니온으로 만듦
 */

// 문자열이면 string을, 아니면 number를 반환하는 타입
type StringNumberSwitch<T> = T extends string ? string : number;

// number를 넣으면 number 타입이 됨
let a: StringNumberSwitch<number>;

// string을 넣으면 string 타입이 됨
let b: StringNumberSwitch<string>;

// string | number를 넣으면 각각 검사해서
// string | number 타입이 됨
let c: StringNumberSwitch<string | number>;

// string | number | boolean을 넣으면 각각 검사해서
// string | number 타입이 됨 (boolean은 number가 되어 number와 합쳐짐)
let d: StringNumberSwitch<string | number | boolean>;

/**
 * 실용적인 예제 - 특정 타입 제거하기
 */

// T에서 U 타입을 제거하는 유틸리티 타입
type Exclude<T, U> = T extends U ? never : T;

// string을 제거하고 number | boolean만 남김
type A = Exclude<string | number | boolean, string>;

// T에서 U 타입을 추출하는 유틸리티 타입
type Extract<T, U> = T extends U ? T : never;

// string을 추출하고 string만 남김
type B = Extract<number | string | boolean, string>;
