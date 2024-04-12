// 로컬 스토리지 set 함수
export const setLocalStorageValue = <T>(key: string, value: T) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
};

// 로컬 스토리지 get 함수
export const getLocalStorageValue = <T>(key: string, defaultValue: T): T => {
  // SSR일때 기본값 반환
  if (typeof window === "undefined") {
    return defaultValue;
  }
  const storedValue = localStorage.getItem(key);
  return storedValue ? (JSON.parse(storedValue) as T) : defaultValue;
};
