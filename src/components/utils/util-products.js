export const getSortedPrice = (data, sortBy) => {
  if (sortBy === "PRICE_LOW_TO_HIGH") {
    return [...data].sort((itemOne, itemTwo) => itemOne.price - itemTwo.price);
  } else if (sortBy === "PRICE_HIGH_TO_LOW") {
    return [...data].sort((itemOne, itemTwo) => itemTwo.price - itemOne.price);
  }
  return data;
};

export const getFilteredData = (
  sortedData,
  priceRange,
  categoryArr,
  ratingRange
) => {
  return sortedData
    .filter((item) => (priceRange ? item.price <= priceRange : true))
    .filter((item) => item.rating <= ratingRange)
    .filter((item) =>
      categoryArr.length !== 0 ? categoryArr.includes(item.categoryName) : true
    );
};
export const minPrice = (sortedData) => {
  return sortedData.reduce((acc, cv) => {
    return cv.price < acc ? cv.price : acc;
  }, sortedData[0].price);
};
export const maxPrice = (sortedData) =>
  sortedData.reduce(
    (acc, cv) => (cv.price > acc ? cv.price : acc),
    sortedData[0].price
  );
