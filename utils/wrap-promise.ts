function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// promise를 감싸서 suspense에게 전달 하는 함수
export const wrapPromise = (promise: Promise<any>) => {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    async (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    },
  );

  return {
    get() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };

  // status가 'pending'이면 suspender(Promise 객체)를 던짐
  // 이로 인해 Suspense가 이 Promise가 완료될 때까지 기다림
};
