/**
 * 함수 오버로딩
 * -> 하나의 함수를 매개변수의 개수나 타입에 따라
 * -> 여러가지 버전으로 만드는 문법
 */

/**
 * 오버로드 시그니쳐
 * -> 함수 오버로딩을 위한 타입 선언
 */

function func(a: number): void;
function func(a: number, b: number, c: number): void;

/**
 * 구현 시그니쳐
 * -> 실제 구현된 함수
 */

function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
// func(1, 2); // 오버로드 시그니쳐에 맞지 않음
func(1, 2, 3);
// func(1, 2, 3, 4); // 오버로드 시그니쳐에 맞지 않음

/**
 * 매개변수가 3개인 경우
 */
