// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';

export const filterData = (data, filterBy, value) => {
  console.log(value);
  console.log(filterBy)
  const filteredData = data.films.filter((film)=> film[filterBy]=== value);
  console.log(filteredData);
  return filteredData;
  
};

export const anotherExample = () => {
  return [];
};
