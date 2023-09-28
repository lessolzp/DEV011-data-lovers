export const filterData = (data, filterBy, value) => {
  const filteredData = data.films.filter((film)=> film[filterBy]=== value);
  return filteredData;
};

export const anotherExample = () => {
  return [];
};
