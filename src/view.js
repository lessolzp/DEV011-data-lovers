import { peopleData} from './dataFunctions.js';

export const renderItems = (dataItems) => {
  //Primero vamos a hacer la variable de referencia "padre"
  const container = document.getElementById("root");
  let template ="";
  dataItems.forEach((element) => {
    const infoPeople = peopleData(element);
    template += `
    <ul class ="card">
    <li class="front" itemscope itemtype="movies" >
      <dl></dl>
      <div class="content">
        <img src="${element.poster}" alt=" "></img>
        <div class="title">
          <dt></dt><dd itemprop="title">${element.title}</dd>  
        </div>
        <div class="info">
          <dt>Director:</dt><dd itemprop="director">${element.director}</dd>
          <dt>Producer:</dt><dd itemprop="producer">${element.producer}</dd>
        </div>
        <div class="inlineinfo">
          <dt>Release date:</dt><dd itemprop="date">${element.release_date}</dd>
          <dt>Ranking position:</dt><dd itemprop="ranking">${element.rt_score}</dd>
        </div>
      </div>
      </dl>
    </li>
    <li class="back" itemscope itemtype="movies">
      <dl>
        <div class="content">
          <div class="title">
            <dt></dt><dd itemprop="title">${element.title}</dd>
          </div>
        <dt></dt><dd itemprop="description">${element.description}</dd>
        <dt>Cast:</dt><dd itemprop="description">It has ${infoPeople.length} characters</dd> 
        </div>
      </dl>
    </li>
    </ul>
    `;
  });
  container.innerHTML = template;
  return container;
};