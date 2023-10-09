import { filterData, sortData, computeStat } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/ghibli/ghibli.js";
const btn2 = document.querySelector('[id="button-clear"]');
const select1 = document.querySelector('select[name="properties"]');
const select2 = document.querySelector('select[name="elements"]');
const selectSort = document.querySelector('[data-testid="select-sort"]');
const selectOrder = document.querySelector("#sort-order");
const rankingLength = document.querySelector('[id="ranking-length"]');
const resultsLength = document.querySelector('[id="results-length"]');
const dependentOptions = {
  title: [
    "Castle in the Sky",
    "From Up on Poppy Hill",
    "Grave of the Fireflies",
    "Howl's Moving Castle",
    "Kiki's Delivery Service",
    "My Neighbors the Yamadas",
    "My Neighbor Totoro",
    "Only Yesterday",
    "Pom Poko",
    "Ponyo on the Cliff by the Sea",
    "Porco Rosso",
    "Princess Mononoke",
    "Spirited Away",
    "Tales from Earthsea",
    "The Cat Returns",
    "The Secret World of Arrietty",
    "The Tale of the Princess Kaguya",
    "The Wind Rises",
    "When Marnie Was There",
    "Whisper of the Heart",
  ],
  director: [
    "Hayao Miyazaki",
    "Isao Takahata",
    "Yoshifumi Kondō",
    "Hiroyuki Morita",
    "Gorō Miyazaki",
    "Hiromasa Yonebayashi",
  ],
  producer: [
    "Hayao Miyazaki",
    "Isao Takahata",
    "Toru Hara",
    "Toshio Suzuki",
    "Yoshiaki Nishimura",
  ],
};


//--1---Función para llamar la funcion renderItems para cargar la data de películas al cargar la página
window.addEventListener("load", () => {
  const dataItems = data.films;
  const container = document.getElementById("root");
  return container.appendChild(renderItems(dataItems));
});

//--2-----Función para resetear los datos --------
btn2.addEventListener("click", (event) => {
  //primero tenemos que borrar todos los elementos que ya estan en la página
  const dataItems = data.films;
  const elementsCardClass = document.querySelectorAll(".card");
  elementsCardClass.forEach((element) => {
    element.remove();
  });
  select1.value = 0;
  select2.value = "";
  event.target.style.backgroundColor = "pink";
  //Ahora volvemos a cargar los datos de todas las películas
  const container = document.getElementById("root");
  container.appendChild( renderItems(dataItems));
});

//--3-----Función para select depende del otro select
select1.addEventListener("change", () => {
  const selectedOption = select1.value;
  const options = dependentOptions[selectedOption];

  select2.innerHTML = "";
  options.forEach((element) => {
    const option = document.createElement("option");
    option.text = element;
    select2.add(option);
  });
});

//--4----Función para que aparezcan los valores filtrados
select2.addEventListener("change", () => {
  const filterBy = select1.value;
  const value = select2.value;
  const dataItems = filterData(data, filterBy, value);
  //primero tenemos que borrar todos los elementos que ya estan en la página
  const elementsCardClass = document.querySelectorAll(".card");
  elementsCardClass.forEach((element) => {
    element.remove();
  });
  //Ahora ya podemos agregar los datos que queremos que aparezcan
  resultsLength.innerHTML = `Your search has ${dataItems.length} results.`;
  const container = document.getElementById("root");
  //estadistica de ranking
  const estadisticaRanking = computeStat(dataItems);
  rankingLength.innerHTML = `Average ranking/promedio del ranking: ${estadisticaRanking}`;
  container.appendChild(renderItems(dataItems));
});

//--5-----función para ordenar la data---------------

//evento change en los select para sort
selectSort.addEventListener("change", () => {
  const sortBy = selectSort.value;
  const sortOrder = selectOrder.value;
  const filterBy = select1.value;
  const value = select2.value;
  const dataItems = filterData(data, filterBy, value);
  const sortedData = sortData(dataItems, sortBy, sortOrder); // Llama a la función de ordenar
  const elementsCardClass = document.querySelectorAll(".card");
  elementsCardClass.forEach((element) => {
    element.remove();
  });
  const container = document.getElementById("root");
  container.appendChild(renderItems(sortedData));
});
//evento change en los select para order
selectOrder.addEventListener("change", () => {
  const sortBy = selectSort.value;
  const sortOrder = selectOrder.value;
  const filterBy = select1.value;
  const value = select2.value;
  const dataItems = filterData(data, filterBy, value);
  const sortedData = sortData(dataItems, sortBy, sortOrder);
  const elementsCardClass = document.querySelectorAll(".card");
  elementsCardClass.forEach((element) => {
    element.remove();
  });
  const container = document.getElementById("root");
  container.appendChild(renderItems(sortedData));
});

