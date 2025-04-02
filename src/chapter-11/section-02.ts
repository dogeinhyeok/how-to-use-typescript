/**
 * Pick <T, K>
 * -> 특정 프로퍼티만 선택하여 새로운 타입을 만들어주는 유틸리티 타입
 * -> 예: 게시글에서 제목과 내용만 선택하여 새로운 타입 생성
 * -> T: 선택할 프로퍼티들이 있는 원본 타입
 * -> K: T의 프로퍼티 키들 중에서 선택하고 싶은 프로퍼티 키들
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Pick 타입 구현 설명
// T: 원본 타입
// K extends keyof T: K는 T의 프로퍼티 키들만 가능
// [key in K]: K에 있는 각 키에 대해
// T[key]: 원본 타입 T에서 해당 키의 타입을 가져옴
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

// title과 content만 선택하여 새로운 타입 생성
// 다른 프로퍼티는 사용 불가
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 콘텐츠",
};

/**
 * Omit <T, K>
 * -> 특정 프로퍼티를 제거하여 새로운 타입을 만들어주는 유틸리티 타입
 * -> 예: 게시글에서 썸네일을 제외한 내용만 선택하여 새로운 타입 생성
 * -> T: 프로퍼티를 제거할 원본 타입
 * -> K: 제거하고 싶은 프로퍼티 키들
 */

// Omit 타입 구현 설명
// Pick과 Exclude를 조합하여 구현
// Exclude<keyof T, K>: T의 모든 키에서 K를 제외한 키들만 선택
// Pick<T, ...>: 선택된 키들로 새로운 타입 생성
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// title을 제외한 모든 프로퍼티를 가진 타입 생성
// title 프로퍼티는 사용 불가
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record <K, V>
 * -> 특정 프로퍼티들을 가진 객체 타입을 만들어주는 유틸리티 타입
 * -> 예: 태그 별로 게시글 수를 저장하는 객체 타입 생성
 * -> K: 프로퍼티 키들의 타입
 * -> V: 프로퍼티 값들의 타입
 */

// 예시: 태그 별로 게시글 수를 저장하는 객체 타입
type ThumbnailLegacy = {
  large: { url: string };
  medium: { url: string };
  small: { url: string };
  watch: { url: string };
};

// Record 타입 구현 설명
type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;

// Record 타입 직접 구현
type Record<K extends keyof any, V> = {
  [key in K]: V;
};
