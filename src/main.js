import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/ghibli/ghibli.js';
const btn = document.getElementById("button-filter");

function crearelementos() {
  //Creación de elementos
  //Primero vamos a hacer la variable de referencia "padre"
  let container = document.getElementById("root");
  // Crear un elemento <ul> con atributo itemscope y itemtype
  let ulElement = document.createElement("ul");
  ulElement.setAttribute("itemscope", "");
  ulElement.setAttribute("itemtype", "http://schema.org/Movie");
  // Crear elementos <dl> y sus respectivos <dt> y <dd> con atributo itemscope y itemtype
  //Imagen
  let imgElement = document.createElement("img");
      imgElement.setAttribute("src","https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg");
      imgElement.setAttribute("alt","");
  let dlElement = document.createElement("dl");
    dlElement.setAttribute("itemscope", "");
    dlElement.setAttribute("itemtype", "http://schema.org/Movie");
  //Titulo
  let dtTitle = document.createElement("dt");
  let ddTitle = document.createElement("dd");
    ddTitle.setAttribute("itemprop","title");
  //Descripción
  let dtDescription = document.createElement("dt");
  let ddDescription = document.createElement("dd");
    ddDescription.setAttribute("itemprop","description");
  //Director
  let dtDirector = document.createElement("dt");
  let ddDirector = document.createElement("dd");
    ddDirector.setAttribute("itemprop","director");
  //Productor
  let dtProducer = document.createElement("dt");
  let ddProducer = document.createElement("dd");
    ddProducer.setAttribute("itemprop","producer");
  //Año lanzamiento
  let dtrelDate = document.createElement("dt");
  let ddrelDate = document.createElement("dd");
    ddrelDate.setAttribute("itemprop","release_date");
  //Score
  let dtrtScore = document.createElement("dt");
  let ddrtScore = document.createElement("dd");
    ddrtScore.setAttribute("itemprop","rt_score");
  
  // Configurar los elementos <dt> y <dd> con los datos del objeto
  dtTitle.innerHTML = "Película:";
  ddTitle.innerHTML = data.films[0].title;
  
  dtDescription.innerHTML = "Descripción:";
  ddDescription.innerHTML = data.films[0].description;
  dtDirector.innerHTML = "Director:";
  ddDirector.innerHTML = data.films[0].director;
  dtProducer.innerHTML = "Productor:";
  ddProducer.innerHTML = data.films[0].producer;
  dtrelDate.innerHTML = "Año de lanzamiento:";
  ddrelDate.innerHTML = data.films[0].release_date;
  dtrtScore.innerHTML = "Ranking:";
  ddrtScore.innerHTML = data.films[0].rt_score;
  
  // Agregar el elemento <ul> al documento HTML con atributo itemprop
  container.appendChild(ulElement);
  ulElement.appendChild(dlElement);
  
  
  // Agregar los elementos <dt> y <dd> al elemento <dl>
  dlElement.appendChild(dtTitle);
  dlElement.appendChild(ddTitle);
  dlElement.appendChild(imgElement);
  dlElement.appendChild(dtDescription);
  dlElement.appendChild(ddDescription);
  dlElement.appendChild(dtDirector);
  dlElement.appendChild(ddDirector);
  dlElement.appendChild(dtProducer);
  dlElement.appendChild(ddProducer);
  dlElement.appendChild(dtrelDate);
  dlElement.appendChild(ddrelDate);
  dlElement.appendChild(dtrtScore);
  dlElement.appendChild(ddrtScore);
  
  // Agregar el elemento <dl> al elemento <ul> con atributo itemprop
  //const liElement = document.createElement("li");
  //liElement.appendChild(dlElement);
  //liElement.setAttribute("itemprop", "actor"); 
  //ulElement.appendChild(liElement);
return "hola";
};
btn.addEventListener('click', crearelementos);