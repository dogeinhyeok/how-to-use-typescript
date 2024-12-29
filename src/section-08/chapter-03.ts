/**
 * map 메서드 구현
 * -> 배열의 각 요소를 변환하여 새로운 배열을 반환
 * -> 제네릭을 사용하여 입력과 출력 타입을 유연하게 처리
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  // 결과 배열의 타입을 U[]로 명시
  const result: U[] = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

// 사용 예시와 타입 추론 결과
const doubled = map(arr, (it) => it * 2); // number[]
const parsed = map(["hi", "hello"], (it) => parseInt(it)); // number[]

console.log(doubled); // [2, 4, 6]
console.log(parsed); // [NaN, NaN]

/**
 * forEach 메서드 구현
 * -> 배열의 각 요소에 대해 콜백 함수를 실행
 * -> 제네릭을 사용하여 입력과 출력 타입을 유연하게 처리
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => console.log(it));

forEach(["123", "456"], (it) => {
  console.log(it);
});
