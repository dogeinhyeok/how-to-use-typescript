/**
 * 대수 타입
 * -> 두 개 이상의 타입을 합친 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다
 */

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (string | number | boolean)[] = [1, "hello", true];

type Union1 = Dog | Person;

let union1: Union1 = { name: "dog", color: "black" };

let union2: Union1 = { name: "person", language: "korean" };

let union3: Union1 = { name: "dog", color: "black", language: "korean" };

// let union4: Union1 = { name: "dog" };

/**
 * 2. 교집합 - Intersection 타입
 */

let variable: number & string;

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "dog",
  color: "black",
  language: "korean",
};
