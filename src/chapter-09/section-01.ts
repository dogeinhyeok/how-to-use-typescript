/**
 * 인덱스드 엑세스 타입
 * -> 객체, 배열, 튜플 등의 타입에서 특정 프로퍼티나 요소의 타입을 추출하는 방법
 * -> 대괄호([])를 사용하여 접근
 */

// 게시글 목록을 나타내는 배열 타입
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// PostList[number] -> 배열의 요소 타입을 가져옴
// PostList[number]["author"] -> 요소 타입에서 author 프로퍼티의 타입을 가져옴
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// PostList[0]은 배열의 요소 타입을 의미
const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

printAuthorInfo(post.author);

/**
 * 튜플에서의 인덱스드 엑세스 타입
 * -> 튜플의 각 위치에 있는 타입을 추출할 수 있음
 */
type Tup = [number, string, boolean];

// 첫 번째 요소의 타입(number)을 추출
type Tup0 = Tup[0];

// 두 번째 요소의 타입(string)을 추출
type Tup1 = Tup[1];

// 세 번째 요소의 타입(boolean)을 추출
type Tup2 = Tup[2];

// 존재하지 않는 인덱스로 접근하면 에러 발생
// type Tup3 = Tup[3];

// number를 인덱스로 사용하면 모든 요소의 유니온 타입이 됨
// type TupNum = number | string | boolean
type TupNum = Tup[number];
