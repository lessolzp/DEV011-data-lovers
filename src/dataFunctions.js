export const filterData = (data, filterBy, value) => {
  const filteredData = data.films.filter((film)=> film[filterBy]=== value);
  return filteredData;
};

export const sortData = (dataItems, sortBy, sortOrder) => {
  const copyData = [...dataItems];
  const compare = (a, b) => {
    const sortByA = parseFloat(a[sortBy]);
    const sortByB = parseFloat(b[sortBy]);
    if (sortOrder === 'asc') {
      return sortByA > sortByB ? 1 : -1;
    } else if (sortOrder === 'desc') {
      return sortByB > sortByA ? 1 : -1;
    }
  };
  const sortedData = copyData.sort(compare)
  return sortedData;
};

export const peopleData =(film) =>{
  const dataPeople = film.people.map((i)=>{
    return i.name;
  });
  return dataPeople;
};
