// 천 단위로 , 붙이는 함수
const formattedWithComma = (price: string | number) => {
  const originalPrice = Number(price);
  const organizedPrice = originalPrice.toLocaleString();
  return organizedPrice;
};

export default formattedWithComma;
