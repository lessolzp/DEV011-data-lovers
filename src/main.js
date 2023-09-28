//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/ghibli/ghibli.js';
console.log(data);
/*const btn = document.getElementById("button-filter");

function callingrenderItems(){
  return renderItems(data)
}
btn.addEventListener('click', callingrenderItems);*/
renderItems(data);
import { sortData } from './dataFunctions.js';

//referencias a los elementos del DOM
const selectSort = document.querySelector('[data-testid="select-sort"]');
const radioAsc = document.getElementById('asc');
const radioDesc = document.getElementById('desc');

//evento change en el select y los radio buttons
selectSort.addEventListener('change', () => {
  const sortBy = selectSort.value;
  const sortOrder = radioAsc.checked ? 'asc' : 'desc'; 
  const sortedData = sortData(data, sortBy, sortOrder); // Llama a la función de ordenar
  renderItems(sortedData); // Llama a la función para actualizar la vista con los datos ordenados
});

radioAsc.addEventListener('change', () => {
  // Cuando cambia el radio button de orden ascendente, simplemente vuelve a aplicar la ordenación actual
  const sortBy = selectSort.value;
  const sortOrder = 'asc'; 
  const sortedData = sortData(data, sortBy, sortOrder);
  renderItems(sortedData);
});

radioDesc.addEventListener('change', () => {
  // Cuando cambia el radio button de orden descendente, vuelve a aplicar la ordenación actual pero en orden descendente
  const sortBy = selectSort.value;
  const sortOrder = 'desc';
  const sortedData = sortData(data, sortBy, sortOrder);
  renderItems(sortedData);
});