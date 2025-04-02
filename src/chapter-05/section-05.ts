/**
 * 사용자 정의 타입 가드
 * -> 참 또는 거짓을 반환하는 함수를 이용해 타입을 구분하는 방식
 * -> 'is' 연산자를 사용하여 커스텀 타입 가드를 만들 수 있음
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

/**
 * Animal 타입 정의
 * -> Dog와 Cat 타입의 유니온 타입
 */

type Animal = Dog | Cat;

/**
 * isDog 타입 가드 함수
 * -> animal이 Dog 타입인지 확인
 * -> 'animal is Dog'는 이 함수가 true를 반환하면
 * -> 매개변수 animal이 Dog 타입임을 보장
 */

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

/**
 * isCat 타입 가드 함수
 * -> animal이 Cat 타입인지 확인
 * -> 'animal is Cat'는 이 함수가 true를 반환하면
 * -> 매개변수 animal이 Cat 타입임을 보장
 */

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

/**
 * warning 함수
 * -> 동물의 타입에 따라 다른 처리를 하는 함수
 * -> isDog 타입 가드를 사용하여 강아지 여부 확인
 * -> in 연산자를 사용하여 고양이 여부 확인
 */

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지로 타입 좁히기 성공
    animal;
  } else if ("isScratch" in animal) {
    // 고양이로 타입 좁히기 성공
  }
}
