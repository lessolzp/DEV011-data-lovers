export const filterData = (data, filterBy, value) => {
  const filteredData = data.films.filter((film) => film[filterBy] === value);
  return filteredData;
};

export const sortData = (dataItems, sortBy, sortOrder) => {
  const copyData = [...dataItems];
  const compare = (a, b) => {
    const sortByA = parseFloat(a[sortBy]);
    const sortByB = parseFloat(b[sortBy]);
    if (sortOrder === "asc") {
      return sortByA > sortByB ? 1 : -1;
    } else if (sortOrder === "desc") {
      return sortByB > sortByA ? 1 : -1;
    }
  };
  const sortedData = copyData.sort(compare);
  return sortedData;
};
/* const copyData = [...dataItems];
  function comparar(a, b) {
    let valueA, valueB;
    if (sortBy === "rt_score") {
      valueA = a.rt_score;
      valueB = b.rt_score;
    } else if (sortBy === "release_date") {
      valueA = a.release_date;
      valueB = b.release_date;
    }
    if (sortOrder === "asc") {
      return valueA - valueB;
    } else if (sortOrder === "desc") {
      return valueB - valueA;
    }
  }
  const sortedData = copyData.sort(comparar);
  return sortedData;
};*/

export const peopleData = (film) => {
  const dataPeople = film.people.map((i) => {
    return i.name;
  });
  return dataPeople;
};
export const computeStat = (data) => {
  const totalRanking = data.reduce(
    (sum, film) => sum + parseFloat(film.rt_score),
    0
  );
  const promedioRanking = totalRanking / data.length;
  return promedioRanking.toFixed(2);
};
