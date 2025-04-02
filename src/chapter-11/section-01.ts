/**
 * Partial <T>
 * -> 모든 프로퍼티를 선택적으로 만들어주는 유틸리티 타입
 * -> 원본 타입의 모든 프로퍼티를 선택적으로 만들어줌
 * -> 원본 타입의 프로퍼티 중 일부만 필수로 만들고 나머지는 선택적으로 만들고 싶을 때 사용
 * -> 예: 게시글 초안 작성 시 일부 정보만 있어도 되는 경우
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

// Partial 타입 구현
// keyof T: T 타입의 모든 프로퍼티 키를 추출
// [key in keyof T]: 모든 프로퍼티를 순회
// ?: 각 프로퍼티를 선택적으로 만듦
type Partial<T> = {
  [key in keyof T]?: T[key];
};

// 예시: 게시글 초안 - 일부 프로퍼티만 입력해도 됨
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

/**
 * Required <T>
 * -> 모든 프로퍼티를 필수로 만들어주는 유틸리티 타입
 * -> Partial의 반대 개념
 * -> 선택적 프로퍼티(?)를 모두 필수로 변경
 * -> 예: 게시글 발행 시 모든 정보가 필요한 경우
 */

// Required 타입 구현
// -?: 선택적 프로퍼티(?)를 제거하여 필수로 만듦
type Required<T> = {
  [key in keyof T]-?: T[key];
};

// 예시: 모든 프로퍼티가 필요한 게시글
const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailUrl: "https://...", // 원래 선택적이었지만 이제 필수
};

/**
 * Readonly <T>
 * -> 모든 프로퍼티를 읽기 전용으로 만들어주는 유틸리티 타입
 * -> 원본 타입의 모든 프로퍼티를 읽기 전용으로 만들어줌
 * -> 한 번 값이 설정되면 변경할 수 없음
 * -> 예: 이미 발행된 게시글의 내용을 보호하고 싶을 때
 */

// Readonly 타입 구현
// readonly: 프로퍼티를 읽기 전용으로 만듦
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

// 예시: 수정할 수 없는 보호된 게시글
const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글 입니다.",
  tags: [],
  content: "",
};

// readonlyPost.title = ""; // 읽기 전용 프로퍼티이므로 변경 불가
