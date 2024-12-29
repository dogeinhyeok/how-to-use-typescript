/**
 * 함수 타입 정의
 */

/**
 * 함수: 매개변수를 받고, 결과값을 반환하는 코드 블록
 * @param a 첫번째 매개변수
 * @param b 두번째 매개변수
 * @returns 합계
 */

function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수 타입 정의
 * -> 매개변수 뒤에 ?를 붙이면 매개변수는 선택적 매개변수가 된다.
 */

function introduce(name = "이정환", age: number, tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("이정환", 27, 175);

introduce("이정환", 27);

/**
 * 나머지 매개변수
 */

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
