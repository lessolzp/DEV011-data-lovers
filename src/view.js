// estas funciones son de ejemplo

export const renderItems = (data) => {
  const filteredData = data.films;
  //Creación de elementos
  //Primero vamos a hacer la variable de referencia "padre"
  const container = document.getElementById("root");
  // Crear un elemento <ul> con atributo itemscope y itemtype
  const ulElement = document.createElement("ul");
  ulElement.setAttribute("itemscope", "");
  ulElement.setAttribute("itemtype", "http://schema.org/Movie");
  // Agregar el elemento <ul> al documento HTML con atributo itemprop
  container.appendChild(ulElement);
  //Empieza el bucle para generar los elementos de cada filme 
  filteredData.forEach((element) => {
    // Crear un elemento <li>
    const liElement = document.createElement("li");
    //Imagen
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", element.poster);
    imgElement.setAttribute("alt", " ");
    // Crear un elemento <dl> con atributo itemscope y itemtype
    const dlElement = document.createElement("dl");
    dlElement.setAttribute("itemscope", "");
    dlElement.setAttribute("itemtype", "http://schema.org/Movie");
    // Crear elementos <dl> y sus respectivos <dt> y <dd> con atributo itemscope y itemtype
    //Titulo
    const dtTitle = document.createElement("dt");
    const ddTitle = document.createElement("dd");
    ddTitle.setAttribute("itemprop", "title");
    //Descripción
    const dtDescription = document.createElement("dt");
    const ddDescription = document.createElement("dd");
    ddDescription.setAttribute("itemprop", "description");
    //Director
    const dtDirector = document.createElement("dt");
    const ddDirector = document.createElement("dd");
    ddDirector.setAttribute("itemprop", "director");
    //Productor
    const dtProducer = document.createElement("dt");
    const ddProducer = document.createElement("dd");
    ddProducer.setAttribute("itemprop", "producer");
    //Año lanzamiento
    const dtrelDate = document.createElement("dt");
    const ddrelDate = document.createElement("dd");
    ddrelDate.setAttribute("itemprop", "release_date");
    //Score
    const dtrtScore = document.createElement("dt");
    const ddrtScore = document.createElement("dd");
    ddrtScore.setAttribute("itemprop", "rt_score");
    // Configurar los elementos <dt> y <dd> con los datos del objeto
    dtTitle.innerHTML = "Película:";
    ddTitle.innerHTML = element.title;
    dtDescription.innerHTML = "Descripción:";
    ddDescription.innerHTML = element.description;
    dtDirector.innerHTML = "Director:";
    ddDirector.innerHTML = element.director;
    dtProducer.innerHTML = "Productor:";
    ddProducer.innerHTML = element.producer;
    dtrelDate.innerHTML = "Año de lanzamiento:";
    ddrelDate.innerHTML = element.release_date;
    dtrtScore.innerHTML = "Ranking:";
    ddrtScore.innerHTML = element.rt_score;
    //Agregar los elementos <li> y <dl> 
    ulElement.appendChild(liElement);
    liElement.appendChild(dlElement);
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
  });
};
