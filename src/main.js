import { filterData} from './dataFunctions.js';
import { renderFilms } from './view.js';


import data from './data/ghibli/ghibli.js';
const btn = document.getElementById("button-filter");

//Para llamar la funcion filterData
function callingfilterData(){
  const filterBy = document.querySelector('select[name="element"]').value;
  const value = document.querySelector('select[name="properties"]').value;
  return filterData(data,filterBy,value)
}

btn.addEventListener('click', callingfilterData);

//Para llamar la funcion renderFilms
function callingrenderItems(){
  return renderFilms(data)};

window.addEventListener('load',callingrenderItems);