import { filterData} from './dataFunctions.js';
import { renderItems } from './view.js';
//import { renderFilms } from './view.js';


import data from './data/ghibli/ghibli.js';
const btn = document.getElementById("button-filter");
const btn2 = document.getElementById("button-clear");
const select1 = document.querySelector('select[name="properties"]');
const select2 = document.querySelector('select[name="elements"]');
const dependentOptions = {
  director: [ "Hayao Miyazaki", "Isao Takahata", "Yoshifumi Kondō", "Hiroyuki Morita", "Gorō Miyazaki", "Hiromasa Yonebayashi"],
  producer: [ "Hayao Miyazaki", "Isao Takahata", "Toru Hara", "Toshio Suzuki", "Yoshiaki Nishimura"]};

//-----Función para llamar la funcion renderItems para cargar la data de películas al cargar la página
function logItems(){
  const dataItems = data.films
  return renderItems(dataItems)}
window.addEventListener('load',logItems);

//----Función para que aparezcan los valores filtrados
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
  return renderItems(dataItems)
}
btn.addEventListener('click', renderFilteredItems);

//-------Función para resetear los datos del filtro---------
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

//-------Función para que un select dependa del otro  
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
optionSelect();