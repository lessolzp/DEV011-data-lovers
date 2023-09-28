// estas funciones son de ejemplo

export const renderItems = (data) => {
  
  const filteredData = data.films;
  //Creación de elementos
  //Primero vamos a hacer la variable de referencia "padre"
  const container = document.getElementById("root");
  //Empieza el bucle para generar los elementos de cada filme 
  filteredData.forEach((element) => {
  // Crear un elemento <ul> con atributo itemscope y itemtype
  const ulElement = document.createElement("ul");
  ulElement.setAttribute("class", "card");
  ulElement.setAttribute("itemscope", "");
  ulElement.setAttribute("itemtype", "http://schema.org/Movie");
  // Agregar el elemento <ul> al documento HTML con atributo itemprop
  
    // Crear un elemento <li>
    const liElement = document.createElement("li");
    liElement.setAttribute("class", "front");
    //Crear el div para contenido
    const divElement = document.createElement("div");
    divElement.setAttribute("class","content");
    //Imagen
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", element.poster);
    imgElement.setAttribute("alt", " ");
    // Crear elementos <dl> y sus respectivos <dt> y <dd> con atributo itemscope y itemtype
    //Crear otro elemento div para el título
    const divTitle = document.createElement("div");
    divTitle.setAttribute("class","title");
    //Titulo
    const dlTitle = document.createElement("dl");
    const dtTitle = document.createElement("dt");
    dtTitle.setAttribute("itemprop", "title");
    //crear el div para la info
    const divInfo = document.createElement("div");
    divInfo.setAttribute("class","info");
    //Director
    const dlDirector = document.createElement("dl");
    const dtDirector = document.createElement("dt");
    dtDirector.setAttribute("itemprop", "director");
    //Productor
    const dlProducer = document.createElement("dl");
    const dtProducer = document.createElement("dt");
    dtProducer.setAttribute("itemprop", "producer");
    //crear el div para la info en línea
    const divLineInfo = document.createElement("div");
    divLineInfo.setAttribute("class","inlineinfo");
    //Año lanzamiento
    const dlrelDate = document.createElement("dl");
    const dtrelDate = document.createElement("dt");
    dtrelDate.setAttribute("itemprop", "release_date");
    //Score
    const dlrtScore = document.createElement("dl");
    const dtrtScore = document.createElement("dt");
    dtrtScore.setAttribute("itemprop", "rt_score");
    // Crear un elemento <li> para la parte de atras
    const liBack = document.createElement("li");
    liBack.setAttribute("class", "back");
    //Crear el div para contenido
    const divContentBack = document.createElement("div");
    divContentBack.setAttribute("class","content");
    //Crear el div para título trasero
    const divTitleBack = document.createElement("div");
    divTitleBack.setAttribute("class","title");
    //Titulo
    //const dtTitle = document.createElement("dt");
    //dtTitle.setAttribute("itemprop", "title");
    //Descripción
    const dlDescription = document.createElement("dl");
    const dtDescription = document.createElement("dt");
    dtDescription.setAttribute("itemprop", "description");
    // Configurar los elementos <dl> y <dt> con los datos del objeto
    //dlTitle.innerHTML = "Película:";
    dtTitle.innerHTML = element.title;
    //dtDescription.innerHTML = "Descripción:";
    dlDescription.innerHTML = element.description;
    dlDirector.innerHTML = "Director:";
    dtDirector.innerHTML = element.director;
    dlProducer.innerHTML = "Producer:";
    dtProducer.innerHTML = element.producer;
    dlrelDate.innerHTML = "Release date:";
    dtrelDate.innerHTML = element.release_date;
    dlrtScore.innerHTML = "Ranking Position:";
    dtrtScore.innerHTML = element.rt_score;
    //Agregar los elementos <li> y <dl> 
    container.appendChild(ulElement);
    ulElement.appendChild(liElement);
    liElement.appendChild(divElement);
    // Agregar los elementos <dt> y <dd> al elemento <dl>
    divElement.appendChild(imgElement);
    divElement.appendChild(divTitle);
    divTitle.appendChild(dlTitle);
    divTitle.appendChild(dtTitle);
    //Agregamos el div "info"
    divElement.appendChild(divInfo);
    divInfo.appendChild(dlDirector);
    divInfo.appendChild(dtDirector);
    divInfo.appendChild(dlProducer);
    divInfo.appendChild(dtProducer);
    //Agregamos el div "info in line"
    divElement.appendChild(divLineInfo);
    divLineInfo.appendChild(dlrelDate);
    divLineInfo.appendChild(dtrelDate);
    divLineInfo.appendChild(dlrtScore);
    divLineInfo.appendChild(dtrtScore);
    //Agregamos el li para la parte de atras
    ulElement.appendChild(liBack);
    liBack.appendChild(divContentBack);
    divContentBack.appendChild(divTitleBack);
    divTitleBack.appendChild(dlTitle);
    divTitleBack.appendChild(dtTitle);
    divContentBack.appendChild(dlDescription);
    divContentBack.appendChild(dtDescription);
  });

};
