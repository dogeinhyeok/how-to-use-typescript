/**
 * 프로미스
 * -> 비동기 작업의 결과를 나타내는 객체
 * -> 비동기 작업이 완료되면 결과를 제공하거나 오류를 발생시키는 객체
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    // reject("~~ 때문에 실패");
  }, 3000);
});

// promise 성공 시 실행
promise.then((response) => {
  console.log(response); // 20
});

// promise 실패 시 실행
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

// promise 성공 또는 실패 시 실행
promise.finally(() => {
  console.log("promise 실행이 끝났습니다.");
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 내용",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

// postRequest 성공 시 실행
postRequest.then((post) => {
  console.log(post.id);
});
