/**
 * any 타입
 * -> 모든 타입의 값을 허용하는 타입
 * -> 타입 검사를 비활성화하고 모든 동작을 허용
 * -> 타입 안정성을 해치므로 최대한 사용을 피해야 함
 * -> 기존 자바스크립트 코드와의 호환을 위해 제공
 */

let anyVar: any = 10;
anyVar = "hello"; // 문자열 할당 가능
anyVar = true; // 불리언 할당 가능
anyVar = {}; // 객체 할당 가능
anyVar = () => {}; // 함수 할당 가능

// 타입 검사를 하지 않아 런타임 에러 발생 가능
// anyVar.toUpperCase(); // 런타임 에러
// anyVar.toFixed(); // 런타임 에러

let num: number = 10;
num = anyVar; // any 타입은 어디든 할당 가능

console.log(num); // 출력: [Function: anyVar]

/**
 * unknown 타입
 * -> any 타입보다 안전한 타입
 * -> 모든 타입의 값을 할당받을 수 있음
 * -> 타입 검사를 강제하여 타입 안정성 제공
 * -> 값을 사용하기 전에 타입 검사 필요
 */
let unknownVar: unknown;

unknownVar = ""; // 문자열 할당 가능
unknownVar = 1; // 숫자 할당 가능
unknownVar = () => {}; // 함수 할당 가능

// unknown 타입은 타입 검사 후에만 사용 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
  console.log(num);
} else {
  console.log("not number");
}
