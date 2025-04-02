/**
 * 기본 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진돗개",
};

/** 업 캐스팅 */

animal = dog;

/** 다운 캐스팅 */

// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

/**
 * 업캐스팅 예시
 * -> 자식 타입(ProgrammingBook)에서 부모 타입(Book)으로 대입 가능
 * -> 자식 타입(ProgrammingBook)은 부모 타입(Book)의 모든 프로퍼티를 포함하고 있기 때문
 * -> 반대인 경우 오류 발생
 */

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크리로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 * -> 객체 리터럴을 통해 객체를 생성할 때 추가적인 프로퍼티가 있는지 검사
 */

let book2: Book = {
  name: "한 입 크리로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
};
