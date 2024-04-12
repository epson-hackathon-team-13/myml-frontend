// 전화번호 형식 변환 함수 (010-0000-0000)

const formattedWithDash = (number: string | number) => {
  const numberText = number.toString();
  return `${numberText.slice(0, 3)}-${numberText.slice(3, 7)}-${numberText.slice(8)}}`;
};

export default formattedWithDash;
