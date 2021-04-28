function createCard(domElement, data) {
  const { pic, name, rating, description, location } = data;

  const cardElement = document.createElement('div');
  cardElement.className = "card";

  const locationElement = document.createElement('div');
  locationElement.className = "location";
  locationElement.innerHTML = location;

  cardElement.appendChild(locationElement);

  const picContainerElement = document.createElement('div');
  picContainerElement.className = "card-image";

  const picElement = document.createElement('img');
  picElement.src = pic;
  picElement.alt = `${name}-pic`;

  picContainerElement.appendChild(picElement);
  cardElement.appendChild(picContainerElement);

  const cardBodyElement = document.createElement('div');
  cardBodyElement.className = "card-body";

  const ratingElement = document.createElement('p');
  ratingElement.className = "rating";
  ratingElement.innerHTML = `Rating: ${rating}`;

  cardBodyElement.appendChild(ratingElement);

  const titleElement = document.createElement('p');
  titleElement.className = "title";
  titleElement.innerHTML = name;

  cardBodyElement.appendChild(titleElement);

  const captionElement = document.createElement('p');
  captionElement.className = "caption";
  captionElement.innerHTML = description;

  cardBodyElement.appendChild(captionElement);
  cardElement.appendChild(cardBodyElement);

  cardElement.tabIndex = "0";

  domElement.appendChild(cardElement);
}

export {
  createCard,
}