/**
 * keyof 연산자
 * -> 객체 타입에서 모든 프로퍼티 이름을 추출하는 연산자
 * -> 타입 별칭, 인터페이스, 클래스 등에 사용 가능
 * -> typeof와 함께 사용하면 값의 타입에서 키를 추출할 수 있음
 * -> 타입 안전성을 보장하면서 객체의 프로퍼티에 접근할 때 유용
 */

// typeof person으로 person 객체의 타입을 추출
type Person = typeof person;

// keyof typeof person은 "name" | "age" 타입이 됨
// 이렇게 하면 person 객체의 실제 키만 매개변수로 받을 수 있음
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "이정환",
  age: 27,
};

// "name"은 person 객체의 실제 키이므로 허용됨
getPropertyKey(person, "name");

// 실행 결과 출력
console.log(getPropertyKey(person, "name")); // 이정환
console.log(getPropertyKey(person, "age")); // 27
