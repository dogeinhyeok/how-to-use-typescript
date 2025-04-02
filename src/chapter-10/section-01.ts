/**
 * 조건부 타입
 * -> 조건에 따라 다른 타입으로 결정되는 타입
 * -> extends 키워드와 삼항 연산자를 사용하여 정의
 * -> A extends B ? C : D 형태로 사용
 * -> A가 B의 서브타입이면 C가 되고, 아니면 D가 됨
 */

// number는 string의 서브타입이 아니므로 number 타입이 됨
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// ObjB는 ObjA의 모든 프로퍼티를 가지고 있으므로 서브타입
// 따라서 number 타입이 됨
type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 * -> 제네릭과 함께 사용하면 타입 파라미터에 따라 다른 타입을 반환할 수 있음
 * -> 유연한 타입 설계가 가능해짐
 */

// T가 number면 string을, 아니면 number를 반환하는 타입
type StringNumberSwitch<T> = T extends number ? string : number;

// T가 number이므로 string 타입이 됨
let varA: StringNumberSwitch<number>;

// T가 string이므로 number 타입이 됨
let varB: StringNumberSwitch<string>;

// 함수의 반환 타입도 조건부 타입으로 지정 가능
// T가 string이면 string을, 아니면 undefined를 반환
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

// text가 string이므로 string 타입 반환
let result = removeSpaces("hi im winterlood");
result.toUpperCase();

// text가 undefined이므로 undefined 타입 반환
let result2 = removeSpaces(undefined);
