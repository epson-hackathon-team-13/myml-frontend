// 날짜 변환 함수
const formattedDate = (
  utcValue: number | null | string,
  type:
    | "DEFAULT_FULL" // 2024.01.01
    | "DEFAULT_MONTH_DATE" // 01.01
    | "TEXT_FULL" // 2024년 01월 01일
    | "TEXT_MONTH_DATE" // 01월 01일
    | "SHORTENED_YEAR_DEFAULT_FULL" // 24.01.01
    | "SHORTENED_YEAR_TEXT_FULL", // 24년 01월 01일
) => {
  if (utcValue === null) return "정보 없음";

  const date = new Date(utcValue);
  const year = date.getFullYear();
  const shortenedYear = year.toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  if (type === "DEFAULT_FULL") {
    return `${year}.${month}.${day}`;
  }

  if (type === "DEFAULT_MONTH_DATE") {
    return `${month}.${day}`;
  }

  if (type === "TEXT_FULL") {
    return `${year}년 ${month}월 ${day}일`;
  }

  if (type === "TEXT_MONTH_DATE") {
    return `${month}월 ${day}일`;
  }

  if (type === "SHORTENED_YEAR_DEFAULT_FULL") {
    return `${shortenedYear}.${month}.${day}`;
  }

  if (type === "SHORTENED_YEAR_TEXT_FULL") {
    return `${shortenedYear}년 ${month}월 ${day}일`;
  }

  return `${year}.${month}.${day}`;
};

export default formattedDate;
