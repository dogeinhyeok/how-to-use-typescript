/**
 * infer
 * -> 조건부 타입 내에서 타입 추론을 할 수 있게 해주는 키워드
 * -> extends 절과 함께 사용하여 타입을 추론하고 그 추론된 타입을 사용할 수 있게 함
 * -> 주로 복잡한 타입에서 특정 타입만 추출하고 싶을 때 사용
 */

type FuncA = () => string;

type FuncB = () => number;

type MyReturnType<T> = T extends () => infer R ? R : never;

// FuncA의 반환 타입인 string이 됨
type A = MyReturnType<FuncA>;

// FuncB의 반환 타입인 number가 됨
type B = MyReturnType<FuncB>;

// number는 함수 타입이 아니므로 never가 됨
type C = MyReturnType<number>;

/**
 * 예제
 * -> Promise 타입에서 내부 타입을 추출하는 예제
 * -> T extends Promise<infer R>로 Promise의 타입 인자를 추론
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;

type PromiseB = PromiseUnpack<Promise<string>>;
