//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/ghibli/ghibli.js';
const btn = document.getElementById("button-filter");

//funcion para invocar renderItems
function callingrenderItems(){
  return renderItems(data)
}
btn.addEventListener('click', callingrenderItems);