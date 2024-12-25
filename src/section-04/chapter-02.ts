/**
 * 함수 타입 호환성
 * -> 특정 함수 타입을 다른 함수 타입에 할당할 수 있는지 여부를 결정하는 것
 * -> 1. 반환값의 타입이 호환되는지 여부
 * -> 2. 매개변수의 타입이 호환되는지 여부
 */

/**
 * 1. 반환값의 타입이 호환되는지 여부
 */

type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;

/**
 * 2. 매개변수의 타입이 호환되는지 여부
 */

/**
 * 2-1. 매개변수의 개수가 같은 경우
 */

type C = (value: number) => void;
type D = (value: number) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: number;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

/**
 * 2-2. 매개변수의 개수가 다른 경우
 */

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
