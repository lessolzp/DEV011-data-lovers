import { filterData} from './dataFunctions.js';
import { renderItems } from './view.js';
import { sortData } from './dataFunctions.js';


import data from './data/ghibli/ghibli.js';
const btn2 = document.querySelector('[id="button-clear"]');
const select1 = document.querySelector('select[name="properties"]');
const select2 = document.querySelector('select[name="elements"]');
const selectSort = document.querySelector('[data-testid="select-sort"]');
const radioAsc = document.querySelector('[id="asc"]');
const radioDesc = document.querySelector('[id="desc"]');
const resultsLength = document.querySelector('[id="results-length"]');
const dependentOptions = {
  director: [ "Hayao Miyazaki", "Isao Takahata", "Yoshifumi Kondō", "Hiroyuki Morita", "Gorō Miyazaki", "Hiromasa Yonebayashi"],
  producer: [ "Hayao Miyazaki", "Isao Takahata", "Toru Hara", "Toshio Suzuki", "Yoshiaki Nishimura"]};


//--1---Función para llamar la funcion renderItems para cargar la data de películas al cargar la página
function logItems(){
  const dataItems = data.films
  return renderItems(dataItems)}
window.addEventListener('load',logItems);

//--2-----Función para resetear los datos --------
function resetItems(){
  //primero tenemos que borrar todos los elementos que ya estan en la página
  const dataItems = data.films
  const elementsCardClass = document.querySelectorAll('.card');
  elementsCardClass.forEach((element)=> {
    element.remove();
  });
  select1.value = 0;
  select2.value = "";
  //Ahora volvemos a cargar los datos de todas las películas
  return renderItems(dataItems)
}
btn2.addEventListener('click', resetItems);

//--3-----Función para select depende del otro select
function optionSelect() {
  const selectedOption = select1.value;
  const options = dependentOptions[selectedOption];

  select2.innerHTML = '';
  options.forEach(element => {
    const option = document.createElement('option');
    option.text = element;
    select2.add(option);
  });
}
select1.addEventListener('change', optionSelect);
  
//--4----Función para que aparezcan los valores filtrados
function renderFilteredItems(){
  const filterBy = select1.value
  const value = select2.value;
  const dataItems = filterData(data,filterBy,value)
  //primero tenemos que borrar todos los elementos que ya estan en la página
  const elementsCardClass = document.querySelectorAll('.card');
  elementsCardClass.forEach((element)=> {
    element.remove();
  });
  //Ahora ya podemos agregar los datos que queremos que aparezcan
  resultsLength.innerHTML= `Your search has ${dataItems.length} results.`;
  return renderItems(dataItems)
}
select2.addEventListener('change',renderFilteredItems);

//--5-----función para ordenar la data---------------

//evento change en el select y los radio buttons
selectSort.addEventListener('change', () => {
  const sortBy = selectSort.value;
  const sortOrder = radioAsc.checked ? 'asc' : 'desc';
  const filterBy = select1.value
  const value = select2.value;
  const dataItems = filterData(data,filterBy,value)
  const sortedData = sortData(dataItems, sortBy, sortOrder); // Llama a la función de ordenar
  const elementsCardClass = document.querySelectorAll('.card');
  elementsCardClass.forEach((element)=> {
    element.remove();
  });
  renderItems(sortedData); // Llama a la función para actualizar la vista con los datos ordenados
});

radioAsc.addEventListener('change', () => {
  // Cuando cambia el radio button de orden ascendente, simplemente vuelve a aplicar la ordenación actual
  const sortBy = selectSort.value;
  const sortOrder = 'asc';
  const filterBy = select1.value
  const value = select2.value;
  const dataItems = filterData(data,filterBy,value)
  const sortedData = sortData(dataItems, sortBy, sortOrder);
  const elementsCardClass = document.querySelectorAll('.card');
  elementsCardClass.forEach((element)=> {
    element.remove();
  });
  renderItems(sortedData);
});

radioDesc.addEventListener('change', () => {
  // Cuando cambia el radio button de orden descendente, vuelve a aplicar la ordenación actual pero en orden descendente
  const sortBy = selectSort.value;
  const sortOrder = 'desc';
  const filterBy = select1.value
  const value = select2.value;
  const dataItems = filterData(data,filterBy,value)
  const sortedData = sortData(dataItems, sortBy, sortOrder);
  const elementsCardClass = document.querySelectorAll('.card');
  elementsCardClass.forEach((element)=> {
    element.remove();
  });
  renderItems(sortedData);
});

